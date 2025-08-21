# Laravel 11 + Orchid Integration Guide for TISU Medical Hub

## Overview
This guide outlines the integration between the Next.js frontend and Laravel 11 backend with Orchid admin panel.

## Laravel Backend Setup

### 1. Install Laravel 11 with Orchid
\`\`\`bash
composer create-project laravel/laravel tisu-medical-hub
cd tisu-medical-hub
composer require orchid/platform
php artisan orchid:install
php artisan orchid:admin admin admin@tisu.uz password
\`\`\`

### 2. Environment Configuration
\`\`\`env
# Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tisu_medical_hub
DB_USERNAME=root
DB_PASSWORD=

# API Configuration
FRONTEND_URL=http://localhost:3000
API_TOKEN=your-secure-api-token

# Mail Configuration (for notifications)
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
\`\`\`

### 3. Models and Migrations
Create models with Orchid screens:

\`\`\`bash
php artisan make:model Doctor -m
php artisan make:model Service -m
php artisan make:model Appointment -m
php artisan make:model ContactMessage -m
php artisan make:model NewsArticle -m
php artisan make:model NewsletterSubscription -m
php artisan make:model TreatmentDirection -m
\`\`\`

### 4. Orchid Screens
Create admin screens for content management:

\`\`\`bash
php artisan orchid:screen DoctorListScreen
php artisan orchid:screen DoctorEditScreen
php artisan orchid:screen AppointmentListScreen
php artisan orchid:screen ContactMessageListScreen
php artisan orchid:screen NewsArticleListScreen
\`\`\`

### 5. API Routes
Define API routes in `routes/api.php`:

\`\`\`php
<?php

use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\ServiceController;

// Public API routes
Route::post('/appointments', [AppointmentController::class, 'store']);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);

// Public data routes
Route::get('/doctors', [DoctorController::class, 'index']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{id}', [NewsController::class, 'show']);

// Admin API routes (protected)
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/admin/appointments', [AppointmentController::class, 'index']);
    Route::put('/admin/appointments/{id}', [AppointmentController::class, 'update']);
    Route::get('/admin/contacts', [ContactController::class, 'index']);
    Route::put('/admin/contacts/{id}', [ContactController::class, 'update']);
});
\`\`\`

### 6. Controllers
Example API controller structure:

\`\`\`php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AppointmentController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'service_id' => 'nullable|exists:services,id',
            'doctor_id' => 'nullable|exists:doctors,id',
            'preferred_date' => 'nullable|date',
            'preferred_time' => 'nullable|date_format:H:i',
            'message' => 'nullable|string',
        ]);

        $appointment = Appointment::create($validated);

        // Send notification email to admin
        // Mail::to('admin@tisu.uz')->send(new NewAppointmentNotification($appointment));

        return response()->json([
            'message' => 'Appointment request submitted successfully',
            'appointment_id' => $appointment->id
        ], 201);
    }

    public function index(Request $request): JsonResponse
    {
        $appointments = Appointment::with(['service', 'doctor'])
            ->when($request->status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($appointments);
    }
}
\`\`\`

## Frontend Integration

### 1. Environment Variables
Add to Next.js `.env.local`:

\`\`\`env
LARAVEL_API_URL=http://localhost:8000
LARAVEL_API_TOKEN=your-secure-api-token
\`\`\`

### 2. API Client
Create API client utility:

\`\`\`typescript
// lib/api-client.ts
const API_BASE_URL = process.env.LARAVEL_API_URL || 'http://localhost:8000';
const API_TOKEN = process.env.LARAVEL_API_TOKEN;

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}/api${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  
  return response.json();
}
\`\`\`

### 3. Form Integration
Update forms to use Laravel API:

\`\`\`typescript
// In appointment form component
const handleSubmit = async (formData: FormData) => {
  try {
    const response = await apiRequest('/appointments', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    
    // Show success message
    toast.success('Appointment request submitted successfully!');
  } catch (error) {
    // Show error message
    toast.error('Failed to submit appointment request');
  }
};
\`\`\`

## Security Considerations

### 1. CORS Configuration
Configure CORS in Laravel `config/cors.php`:

\`\`\`php
'allowed_origins' => [
    env('FRONTEND_URL', 'http://localhost:3000'),
],
\`\`\`

### 2. Rate Limiting
Apply rate limiting to API routes:

\`\`\`php
Route::middleware(['throttle:60,1'])->group(function () {
    Route::post('/appointments', [AppointmentController::class, 'store']);
    Route::post('/contact', [ContactController::class, 'store']);
});
\`\`\`

### 3. Input Validation
Always validate input data in Laravel controllers and use form requests for complex validation.

### 4. Authentication
Use Laravel Sanctum for API authentication and implement proper role-based access control.

## Deployment

### 1. Laravel Deployment
- Deploy Laravel application to production server
- Configure database and environment variables
- Set up SSL certificates
- Configure web server (Apache/Nginx)

### 2. Next.js Deployment
- Update API URLs to production Laravel endpoints
- Deploy to Vercel or similar platform
- Configure environment variables

### 3. Database Migration
Run migrations on production:

\`\`\`bash
php artisan migrate --force
php artisan db:seed --class=InitialDataSeeder
\`\`\`

This integration provides a complete full-stack solution with Laravel handling data management and Orchid providing the admin interface, while Next.js serves as the modern frontend.
