import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, UserMinus, UserPlus, Shield, Search, RefreshCw, Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface UserWithRole {
  id: string;
  email: string;
  role: "admin" | "editor" | "user" | null;
  created_at: string;
}

export function PenggunaPage() {
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "editor" | "user">("user");
  const [addingUser, setAddingUser] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("get_users_with_roles");
      if (error) throw error;
      setUsers(data || []);
    } catch (e: any) {
      toast.error("Gagal memuat daftar pengguna: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: "admin" | "editor" | "user") => {
    setUpdatingId(userId);
    try {
      const { error } = await supabase.rpc("update_user_role", {
        target_user_id: userId,
        new_role: newRole,
      });
      if (error) throw error;
      
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );
      toast.success("Peran pengguna berhasil diperbarui");
    } catch (e: any) {
      toast.error("Gagal memperbarui peran: " + e.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteUser = async (userId: string, email: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus akun ${email}? Tindakan ini tidak dapat dibatalkan.`)) {
      return;
    }
    
    setDeletingId(userId);
    try {
      const { error } = await supabase.rpc("delete_user_account", {
        target_user_id: userId,
      });
      if (error) throw error;

      setUsers((prev) => prev.filter((u) => u.id !== userId));
      toast.success(`Akun ${email} berhasil dihapus`);
    } catch (e: any) {
      toast.error("Gagal menghapus pengguna: " + e.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !newPassword) {
      toast.warning("Email dan password wajib diisi");
      return;
    }
    if (newPassword.length < 6) {
      toast.warning("Password minimal 6 karakter");
      return;
    }

    setAddingUser(true);
    try {
      const { data: newUserId, error } = await supabase.rpc("create_new_user_by_admin", {
        new_email: newEmail,
        new_password: newPassword,
        initial_role: newRole,
      });
      if (error) throw error;

      // Prepend user locally
      const newUserRecord: UserWithRole = {
        id: newUserId,
        email: newEmail,
        role: newRole,
        created_at: new Date().toISOString(),
      };
      setUsers((prev) => [newUserRecord, ...prev]);

      toast.success(`Pengguna ${newEmail} berhasil dibuat`);
      setShowAddModal(false);
      setNewEmail("");
      setNewPassword("");
      setNewRole("user");
    } catch (e: any) {
      toast.error("Gagal menambahkan pengguna: " + e.message);
    } finally {
      setAddingUser(false);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      (u.role || "user").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Manajemen Pengguna</h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola hak akses admin, editor, dan pengguna untuk website PT Samasta Nusantara Digdaya
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowAddModal(true)} className="gap-2 bg-primary hover:bg-primary/90 text-white">
            <UserPlus className="h-4 w-4" /> Tambah Pengguna
          </Button>
          <Button onClick={fetchUsers} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" /> Segarkan
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div className="flex items-center gap-3 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Cari email atau peran..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        {loading ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-slate-500">Memuat data pengguna...</p>
            </div>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="min-h-[200px] flex items-center justify-center border-2 border-dashed rounded-xl p-8 text-center text-slate-500">
            <div>
              <Users className="mx-auto h-8 w-8 text-slate-300 mb-2" />
              <p className="text-sm">Tidak ada pengguna ditemukan</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-100">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="font-semibold text-slate-700">Email Pengguna</TableHead>
                  <TableHead className="font-semibold text-slate-700">Terdaftar Pada</TableHead>
                  <TableHead className="font-semibold text-slate-700">Peran / Akses</TableHead>
                  <TableHead className="font-semibold text-slate-700 text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-slate-50/50">
                    <TableCell className="font-medium text-slate-900">{user.email}</TableCell>
                    <TableCell className="text-slate-500">
                      {new Date(user.created_at).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Select
                          disabled={updatingId === user.id}
                          value={user.role || "user"}
                          onValueChange={(val) =>
                            handleRoleChange(user.id, val as any)
                          }
                        >
                          <SelectTrigger className="w-[140px] h-9 border-slate-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">
                              <span className="flex items-center gap-1.5 font-medium text-red-700">
                                <Shield className="h-3.5 w-3.5" /> Admin
                              </span>
                            </SelectItem>
                            <SelectItem value="editor">
                              <span className="flex items-center gap-1.5 font-medium text-blue-700">
                                Editor
                              </span>
                            </SelectItem>
                            <SelectItem value="user">
                              <span className="flex items-center gap-1.5 text-slate-600">
                                User
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {updatingId === user.id && (
                          <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={deletingId === user.id}
                        onClick={() => handleDeleteUser(user.id, user.email)}
                        className="text-slate-400 hover:text-red-600 hover:bg-red-50"
                      >
                        {deletingId === user.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <UserMinus className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {/* Add User Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl border border-slate-200 shadow-xl w-full max-w-md p-6 relative"
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 mb-4">
                <UserPlus className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-slate-900">Tambah Pengguna Baru</h3>
              </div>
              
              <form onSubmit={handleAddUser} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="new-email">Alamat Email</Label>
                  <Input
                    id="new-email"
                    type="email"
                    placeholder="nama@snd.co.id"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="new-password">Kata Sandi (Password)</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <Label>Peran / Hak Akses</Label>
                  <Select
                    value={newRole}
                    onValueChange={(val) => setNewRole(val as any)}
                  >
                    <SelectTrigger className="w-full border-slate-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">
                        <span className="flex items-center gap-1.5 font-medium text-red-700">
                          <Shield className="h-3.5 w-3.5" /> Admin
                        </span>
                      </SelectItem>
                      <SelectItem value="editor">
                        <span className="flex items-center gap-1.5 font-medium text-blue-700">
                          Editor
                        </span>
                      </SelectItem>
                      <SelectItem value="user">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          User
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddModal(false)}
                    disabled={addingUser}
                  >
                    Batal
                  </Button>
                  <Button
                    type="submit"
                    disabled={addingUser}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {addingUser ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" /> Membuat...
                      </>
                    ) : (
                      "Buat Pengguna"
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
