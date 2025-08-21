-- TISU Medical Hub Database Schema
-- This schema should be implemented in Laravel 11 with Orchid admin panel

-- Users table (Laravel default with Orchid extensions)
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    email_verified_at TIMESTAMP NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'doctor', 'staff') DEFAULT 'staff',
    remember_token VARCHAR(100) NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

-- Doctors table
CREATE TABLE doctors (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    experience_years INT NOT NULL,
    surgeries_performed INT DEFAULT 0,
    degrees INT DEFAULT 0,
    image_url VARCHAR(500) NULL,
    description TEXT NULL,
    is_chief BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

-- Services table
CREATE TABLE services (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    price DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'UZS',
    category VARCHAR(100) NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

-- Appointments table
CREATE TABLE appointments (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    service_id BIGINT UNSIGNED NULL,
    doctor_id BIGINT UNSIGNED NULL,
    preferred_date DATE NULL,
    preferred_time TIME NULL,
    message TEXT NULL,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
    notes TEXT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE SET NULL
);

-- Contact messages table
CREATE TABLE contact_messages (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    location ENUM('termez', 'tashkent', 'either') NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'responded', 'closed') DEFAULT 'new',
    response TEXT NULL,
    responded_by BIGINT UNSIGNED NULL,
    responded_at TIMESTAMP NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (responded_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Newsletter subscriptions table
CREATE TABLE newsletter_subscriptions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('active', 'unsubscribed') DEFAULT 'active',
    subscribed_at TIMESTAMP NULL,
    unsubscribed_at TIMESTAMP NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

-- News articles table
CREATE TABLE news_articles (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content LONGTEXT NOT NULL,
    image_url VARCHAR(500) NULL,
    category VARCHAR(100) NULL,
    author_id BIGINT UNSIGNED NOT NULL,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Treatment directions table
CREATE TABLE treatment_directions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    icon VARCHAR(100) NULL,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

-- System settings table
CREATE TABLE system_settings (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    key_name VARCHAR(255) UNIQUE NOT NULL,
    value TEXT NULL,
    description TEXT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL
);

-- Insert initial data
INSERT INTO doctors (name, specialty, experience_years, surgeries_performed, degrees, is_chief, description) VALUES
('Ilyos Khursandov Akhmedovich', 'Urologist', 10, 48, 2, TRUE, 'Leading urologist with extensive experience in minimally invasive procedures and patient care excellence.'),
('Abdullayev Shohobiddin', 'Neurologist', 6, 0, 1, FALSE, 'Experienced neurologist specializing in brain and nervous system disorders.'),
('Aliyeva Munira', 'Cardiologist', 10, 25, 1, FALSE, 'Expert cardiologist with focus on cardiovascular health and cardiac procedures.'),
('Saidov Diyorbek', 'Traumatologist', 8, 15, 1, FALSE, 'Specialist in bone, joint, and musculoskeletal injury treatment.'),
('Nazarova Malika', 'Dermatologist', 7, 0, 1, FALSE, 'Dermatology expert focusing on skin health and cosmetic procedures.'),
('Toshpulatov Bekzod', 'Urologist', 12, 35, 1, FALSE, 'Senior urologist with expertise in urinary system disorders.'),
('Islomova Dildora', 'Gynecologist', 9, 20, 1, FALSE, 'Women\'s health specialist with focus on reproductive health.'),
('Rustamov Shavkat', 'Pediatrician', 5, 0, 1, FALSE, 'Pediatric specialist dedicated to children\'s health and development.'),
('G\'ofurova Dilshoda', 'Oncologist', 11, 30, 2, FALSE, 'Oncology specialist with extensive experience in cancer treatment.'),
('Karimov Jasur', 'Psychiatrist', 6, 0, 1, FALSE, 'Mental health specialist focusing on psychiatric disorders.'),
('Sattorova Iroda', 'Endocrinologist', 10, 0, 1, FALSE, 'Hormone and metabolic disorder specialist.'),
('Xolmatov Komil', 'Orthopedic', 8, 40, 1, FALSE, 'Orthopedic surgeon specializing in bone and joint procedures.'),
('Jalolova Mohira', 'Neuropathologist', 7, 0, 1, FALSE, 'Specialist in nervous system pathology and disorders.');

INSERT INTO services (name, price, category) VALUES
('Endovenous laser ablation (mini, 1 leg, type 1)', 10400000, 'Surgery'),
('Oncomammology surgery', 4700000, 'Surgery'),
('Microsurgical reconstruction with vascular anastomosis', 50400000, 'Surgery'),
('Pacemaker implantation (ECG free)', 7900000, 'Cardiology'),
('Ultrasound examination (UZI)', 150000, 'Diagnostics'),
('FGDS (Fibrogastroduodenoscopy)', 300000, 'Diagnostics'),
('ENMG (Electroneuromyography)', 400000, 'Diagnostics'),
('EEG (Electroencephalography)', 250000, 'Diagnostics'),
('ECG (Electrocardiography)', 100000, 'Diagnostics'),
('EXO Holter monitoring', 500000, 'Diagnostics'),
('3D X-ray examination', 350000, 'Diagnostics'),
('Resuscitation services', 2000000, 'Emergency');

INSERT INTO treatment_directions (name, description, icon, sort_order) VALUES
('Cardiology', 'Heart and cardiovascular system treatment', 'Heart', 1),
('Neurology', 'Nervous system disorders and brain health', 'Brain', 2),
('Pediatrics', 'Specialized care for children and infants', 'Baby', 3),
('Urology', 'Urinary system and male reproductive health', 'Stethoscope', 4),
('Traumatology', 'Bone, joint, and musculoskeletal injuries', 'Bone', 5),
('Otolaryngology', 'Ear, nose, and throat conditions', 'Ear', 6),
('Surgery', 'General and specialized surgical procedures', 'Scissors', 7),
('Gynecology', 'Women\'s reproductive health and wellness', 'Users', 8),
('Allergology', 'Allergy testing and immunology treatment', 'Shield', 9),
('Cosmetology', 'Aesthetic and cosmetic medical procedures', 'Sparkles', 10),
('Therapy', 'General internal medicine and primary care', 'Activity', 11),
('Endocrinology', 'Hormone disorders and metabolic conditions', 'Zap', 12);

INSERT INTO system_settings (key_name, value, description) VALUES
('clinic_name', 'TISU Medical Hub', 'Official clinic name'),
('clinic_description', 'Providing impeccable healthcare services, TISU Medical Hub is one of the largest private medical centers in Uzbekistan. Our most valuable priority is your health.', 'Main clinic description'),
('phone_primary', '+998 95 412 07 07', 'Primary phone number'),
('phone_secondary', '+998 99 900 10 10', 'Secondary phone number'),
('email_primary', 'info@tisu.uz', 'Primary email address'),
('address_termez', 'Surkhandarya region, Termez city, Qorliq town, Navruz neighborhood, house 65', 'Termez location address'),
('address_tashkent', 'Yakkasaroy district, Small Ring Road, house 70A', 'Tashkent location address'),
('working_hours', '24/7', 'Working hours description'),
('years_operating', '15+', 'Years of operation');
