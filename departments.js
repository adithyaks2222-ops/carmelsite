const departmentsData = [
    {
        id: "emergency-medicine",
        name: "Emergency Medicine",
        icon: "fa-solid fa-truck-medical",
        image: "assets/departments/Emergency-Medicine-580x360.jpg",
        about: "The Emergency Medicine department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "cardiology",
        name: "Cardiology",
        icon: "fa-solid fa-heart-pulse",
        image: "assets/departments/Cardiology-580x360.jpg",
        about: "The Cardiology department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "gynaecology",
        name: "Gynaecology",
        icon: "fa-solid fa-person-pregnant",
        image: "assets/departments/Gynaecology-580x360.jpg",
        about: "The Gynaecology department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "orthopaedics",
        name: "Orthopaedics",
        icon: "fa-solid fa-bone",
        image: "assets/departments/Orthopaedics-580x360.jpg",
        about: "The Orthopaedics department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "paediatrics",
        name: "Paediatrics",
        icon: "fa-solid fa-baby",
        image: "assets/departments/Paediatrics-580x360.jpg",
        about: "The Paediatrics department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "general-medicine",
        name: "General Medicine",
        icon: "fa-solid fa-stethoscope",
        image: "assets/departments/General-Medicine-580x360.jpg",
        about: "The General Medicine department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "general-surgery",
        name: "General Surgery",
        icon: "fa-solid fa-scalpel",
        image: "assets/departments/General-Surgery-580x360.jpg",
        about: "The General Surgery department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "ophthalmology",
        name: "Ophthalmology",
        icon: "fa-solid fa-eye",
        image: "assets/departments/Ophthalmology-580x360.jpg",
        about: "The Ophthalmology department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "ent",
        name: "ENT",
        icon: "fa-solid fa-ear-listen",
        image: "assets/departments/ENT-580x360.jpg",
        about: "The ENT department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "dental",
        name: "Dental",
        icon: "fa-solid fa-tooth",
        image: "assets/departments/Dental-580x360.jpg",
        about: "The Dental department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "dermatology",
        name: "Dermatology",
        icon: "fa-solid fa-hands-bubbles",
        image: "assets/departments/Dermatology-580x360.jpg",
        about: "The Dermatology department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "clinical-psychology",
        name: "Clinical Psychology",
        icon: "fa-solid fa-brain",
        image: "assets/departments/Clinical-Psychology-580x360.jpg",
        about: "The Clinical Psychology department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "psychiatry",
        name: "Psychiatry",
        icon: "fa-solid fa-head-side-virus",
        image: "assets/departments/Psychiatry-580x360.jpg",
        about: "The Psychiatry department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "nephrology-dialysis",
        name: "Nephrology & Dialysis",
        icon: "fa-solid fa-droplet",
        image: "assets/departments/Dialysis-580x360.jpg",
        about: "The Nephrology & Dialysis department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "anaesthesia",
        name: "Anaesthesia",
        icon: "fa-solid fa-mask-ventilator",
        image: "assets/departments/Anaesthesia-580x360.jpg",
        about: "The Anaesthesia department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "laparoscopic-surgery",
        name: "Laparoscopic Surgery",
        icon: "fa-solid fa-display",
        image: "assets/departments/Laparoscopic-Surgery-580x360.jpg",
        about: "The Laparoscopic Surgery department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "sicu",
        name: "SICU",
        icon: "fa-solid fa-bed-pulse",
        image: "assets/departments/SICU-580x360.jpg",
        about: "The SICU department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "micu",
        name: "MICU",
        icon: "fa-solid fa-bed",
        image: "assets/departments/MICU-580x360.jpg",
        about: "The MICU department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "ccu",
        name: "CCU",
        icon: "fa-solid fa-heart-circle-check",
        image: "assets/departments/CCU-580x360.jpg",
        about: "The CCU department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "nicu",
        name: "NICU",
        icon: "fa-solid fa-baby-carriage",
        image: "assets/departments/NICU-580x360.jpg",
        about: "The NICU department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "picu",
        name: "PICU",
        icon: "fa-solid fa-child-reaching",
        image: "assets/departments/PICU-580x360.jpg",
        about: "The PICU department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "pharmacy",
        name: "Pharmacy",
        icon: "fa-solid fa-pills",
        image: "assets/departments/Pharmacy-580x360.jpg",
        about: "The Pharmacy department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "radiology",
        name: "Radiology",
        icon: "fa-solid fa-x-ray",
        image: "assets/departments/Radiology-580x360.jpg",
        about: "The Radiology department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "clinical-laboratory",
        name: "Clinical Laboratory",
        icon: "fa-solid fa-flask-vial",
        image: "assets/departments/clinical-pathology-580x360.jpg",
        about: "The Clinical Laboratory department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "physiotherapy",
        name: "Physiotherapy",
        icon: "fa-solid fa-person-walking-with-cane",
        image: "assets/departments/Physiotherapy-580x360.jpg",
        about: "The Physiotherapy department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "blood-bank",
        name: "Blood Bank",
        icon: "fa-solid fa-droplet",
        image: "assets/departments/Blood-Bank-580x360.jpg",
        about: "The Blood Bank department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "nursing-care",
        name: "Nursing Care",
        icon: "fa-solid fa-user-nurse",
        image: "assets/departments/Nursing-Department-580x360.jpg",
        about: "The Nursing Care department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "carmel-medical-society",
        name: "Carmel Medical Society",
        icon: "fa-solid fa-users",
        image: "assets/departments/Managing-board.jpg",
        about: "The Carmel Medical Society department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "quality-department",
        name: "Quality Department",
        icon: "fa-solid fa-award",
        image: "assets/deparment/Quality-Department-580x360.jpg",
        about: "The Quality Department department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "hr-department",
        name: "HR Department",
        icon: "fa-solid fa-user-tie",
        image: "assets/deparment/HR-Department-580x360.jpg",
        about: "The HR Department department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "operations-department",
        name: "Operations Department",
        icon: "fa-solid fa-cogs",
        image: "assets/deparment/Operations-Department-580x360.jpg",
        about: "The Operations Department department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "finance",
        name: "Finance",
        icon: "fa-solid fa-file-invoice-dollar",
        image: "assets/departments/Finance-1-580x360.jpg",
        about: "The Finance department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "it-department",
        name: "IT Department",
        icon: "fa-solid fa-laptop-code",
        image: "assets/deparment/IT-580x360.jpg",
        about: "The IT Department department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
    {
        id: "public-relations",
        name: "Public Relations",
        icon: "fa-solid fa-bullhorn",
        image: "assets/deparment/PR-580x360.jpg",
        about: "The Public Relations department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },
];