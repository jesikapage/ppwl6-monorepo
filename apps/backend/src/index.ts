import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { prisma } from "../prisma/db";
import type { ApiResponse, HealthCheck, User } from "shared";

const app = new Elysia()
  // Mengizinkan frontend (port 5173 atau 5174) untuk mengakses backend
  .use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }))
  // Dokumentasi API di /swagger
  .use(swagger())
  
  // Route default
  .get("/", (): ApiResponse<HealthCheck> => {
    return {
      data: { status: "ok" },
      message: "server running"
    };
  })

  // Route untuk mengambil data user dari database
  .get("/users", async () => {
    const users = await prisma.user.findMany(); // Ini mengambil data dari database
    return {
      data: users,        // Ini memenuhi instruksi "data"
      message: "User list" // Ini memenuhi instruksi "message"
    };
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);