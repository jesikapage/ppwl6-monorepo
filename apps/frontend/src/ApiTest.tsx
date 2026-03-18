import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ApiResponse, User } from "shared"; // Ganti HealthCheck jadi User

function App() {
  // Kita simpan array user ke dalam state
  const [users, setUsers] = useState<User[]>([])
  const [message, setMessage] = useState<string>("")

  const handleClick = async () => {
    try {
      // 1. Panggil endpoint /users
      const res = await fetch("http://localhost:3000/users")
      const result: ApiResponse<User[]> = await res.json()
      
      // 2. Simpan data ke state
      setUsers(result.data)
      setMessage(result.message)
    
    } catch (error) {
      console.error(error)
      setMessage("Error connecting to server")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Button onClick={handleClick}>
        Get Users
      </Button>

      <div className="p-4 border rounded w-96">
        <p><b>Status:</b> {message}</p>
        <hr className="my-2"/>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="py-1">
              {user.name} - <span className="text-gray-500 text-sm">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App