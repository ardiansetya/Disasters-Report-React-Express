# Aplikasi Pelaporan Bencana 🌀

Aplikasi ini memungkinkan pengguna untuk melaporkan kejadian bencana seperti banjir, gempa bumi, kebakaran, dan tanah longsor. Setelah pengguna melaporkan kejadian bencana, data akan disimpan dan ditampilkan di daftar bencana.

## Fitur 🔧
- **Formulir Pelaporan Bencana**: Pengguna dapat memasukkan nama pelapor, lokasi kejadian, jenis bencana, deskripsi, dan tanggal kejadian.
- **Daftar Bencana**: Menampilkan daftar semua kejadian bencana yang telah dilaporkan.

## Teknologi yang Digunakan 💻

- **Frontend**: React, Axios, Tailwind CSS
- **Backend**: Express.js, PostgreSQL
- **Database**: PostgreSQL

### Prasyarat

- Node.js
- PostgreSQL

### Langkah-langkah untuk Mengatur Proyek 🛠️

1. **Clone repository ini**:

   ```bash
   git clone https://github.com/ardiansetya/UAS-Pemsik.git
   cd UAS-Pemsik
Berikut adalah dokumentasi untuk GitHub proyek Anda dengan menggunakan ikon untuk memberikan tampilan yang lebih menarik dan terstruktur.

2. **Instal dependensi di frontend dan backend**:

   - Untuk **frontend**:
     ```bash
     cd fe
     npm install
     ```

   - Untuk **backend**:
     ```bash
     cd be
     npm install
     ```

3. **Mengatur database**:
   - Pastikan Anda memiliki PostgreSQL yang terinstal.
   - Atur konfigurasi database di file `.env` untuk backend.

4. **Menjalankan aplikasi**:
   - Jalankan backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Jalankan frontend:
     ```bash
     cd frontend
     npm run dev
     ```

## Endpoints API 📡

## Auth

- **POST** `/api/register`: Register
  - Request body:
    ```json
    {
       "name": "michelle",
       "email": "michelle@gmail.com",
       "password": "12345678"
    }
    ```
  - Response:
    ```json
    {
       "user": {
          "id": 1,
          "name": "michelle",
          "email": "michelle@gmail.com"
        },
     "token": "Your Token",
     "message": "Register successful"
    }
    ```
- **POST** `/api/login`: Login
  - Request body:
    ```json
    {
     "email": "michelle@gmail.com",
     "password": "12345678"
   }
    ```
  - Response:
    ```json
    {
    "user": {
       "id": 1,
       "name": "michelle",
       "email": "michelle@gmail.com"
     },
     "token": "Your Token",
     "message": "Login successful"
    }
    ```
## CRUD

- **POST** `/api/disasters`: Melaporkan bencana
  - Request body:
    ```json
    {
      "reporterName": "Nama Pelapor",
      "location": "Lokasi Kejadian",
      "disasterType": "Jenis Bencana",
      "description": "Deskripsi Kejadian",
      "date": "Tanggal Kejadian"
    }
    ```
  - Response:
    ```json
    {
      "status": "success"
      "message": "Disasters created successfully",
      "data": {
      "reporterName": "Nama Pelapor",
      "location": "Lokasi Kejadian",
      "disasterType": "Jenis Bencana",
      "description": "Deskripsi Kejadian",
      "date": "Tanggal Kejadian"
      }
    }
    ```

- **GET** `/api/disasters`: Mengambil semua data bencana yang sudah dilaporkan
  - Response:
    ```json
    {
    "status": "success"
    "message": "Disasters retrieved successfully",
    "data": [
        {
        "reporterName": "Nama Pelapor",
        "location": "Lokasi Kejadian",
        "disasterType": "Jenis Bencana",
        "description": "Deskripsi Kejadian",
        "date": "Tanggal Kejadian"
        },
      ]
    }
    ```

- **PUT** `/api/disasters/:id`: Edit semua data bencana yang sudah dilaporkan
  - Response:
    ```json
    {
    "status": "success"
    "message": "Disasters edited successfully",
    "data": [
        {
        "reporterName": "Nama Pelapor",
        "location": "Lokasi Kejadian",
        "disasterType": "Jenis Bencana",
        "description": "Deskripsi Kejadian",
        "date": "Tanggal Kejadian"
        },
      ]
    }
    ```
- **DELETE** `/api/disasters/:id`: Edit semua data bencana yang sudah dilaporkan
  - Response:
    ```json
    {
    "status": "success"
    "message": "Disaster deleted successfully",
    "data": [
        {
        "reporterName": "Nama Pelapor",
        "location": "Lokasi Kejadian",
        "disasterType": "Jenis Bencana",
        "description": "Deskripsi Kejadian",
        "date": "Tanggal Kejadian"
        },
      ]
    }
    ```
