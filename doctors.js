const doctorsData = [
    {
        "id": "dr-sr-litty-maria",
        "name": "Dr. Sr. Litty Maria",
        "image": "assets/doctors/Dr.Sr_.Litty-Maria.jpg",
        "specialization": "Physician",
        "qualification": "MBBS, MD, DIP BNB",
        "experience": "10+ Years",
        "about": ""
    },
    {
        "id": "dr-jimmy-jose",
        "name": "Dr. Jimmy Jose",
        "image": "assets/doctors/Dr.Jimmy-Jose.jpg",
        "specialization": "Chief Physician",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Jimmy Jose is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Chief Physician, they specialize in advanced treatments and evidence-based medical practices.",
    },
    {
        "id": "dr-prema-george",
        "name": "Dr. Prema George",
        "image": "assets/doctors/Dr.Prema-George.jpg",
        "specialization": "Chief Gynecologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Prema George is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Chief Gynecologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-sr-soumya-thomas",
        "name": "Dr. Sr. Soumya Thomas",
        "image": "assets/doctors/Dr.Sr_.Soumya-Thomas.jpg",
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Soumya Thomas is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Gynecologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-santhakumari-k",
        "name": "Dr. Santhakumari K",
        "image": "assets/doctors/Dr.Santhakumari-K.jpg",
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Santhakumari K is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Gynecologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-rafeeq-a-k",
        "name": "Dr. Rafeeq A. K.",
        "image": "assets/doctors/Dr.Rafeeq-A-K.jpg",
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Rafeeq A. K. is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Pediatrician, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-mathew-issac",
        "name": "Dr. Mathew Issac",
        "image": "assets/doctors/Dr.Mathew-Issac.jpg",
        "specialization": "Senior Orthopedic Surgeon",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Mathew Issac is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Senior Orthopedic Surgeon, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-denny-p-kuttikkatu",
        "name": "Dr. Denny P Kuttikkatu",
        "image": "assets/doctors/DR.DENNY.jpg",
        "specialization": "Laparoscopic Surgeon",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Denny P Kuttikkatu is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Laparoscopic Surgeon, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-vinod-thomas",
        "name": "Dr. Vinod Thomas",
        "image": "assets/doctors/Dr.Vinod-Thomas.jpg",
        "specialization": "Interventional Cardiologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Vinod Thomas is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Interventional Cardiologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-saji-subramanian",
        "name": "Dr. Saji Subramanian",
        "image": "assets/doctors/Dr.Saji-Subramanian.jpg",
        "specialization": "Interventional Cardiologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Saji Subramanian is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Interventional Cardiologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-uma-lakshmi-damodar",
        "name": "Dr. Uma Lakshmi Damodar",
        "image": "assets/doctors/Dr.Uma-Lakshmi-Damodar.jpg",
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Uma Lakshmi Damodar is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in ENT Specialist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-muneer-a-a",
        "name": "Dr. Muneer A.A.",
        "image": "assets/doctors/Dr.Muneer.jpg",
        "specialization": "Anesthesiologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Muneer A.A. is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Anesthesiologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-sr-sheela-maria",
        "name": "Dr. Sr. Sheela Maria",
        "image": "assets/doctors/Dr.Sr_.Sheela-Maria.jpg",
        "specialization": "Medical Superintendent",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Sheela Maria is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Medical Superintendent, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-aswathy-anand",
        "name": "Dr. Aswathy Anand",
        "image": "assets/doctors/Dr.Aswathy-Anand.jpg",
        "specialization": "Psychologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Aswathy Anand is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Psychologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-vilesh-valsalan",
        "name": "Dr. Vilesh Valsalan",
        "image": "assets/doctors/Dr.Vilesh-Valson.jpg",
        "specialization": "Consultant Nephrologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Vilesh Valsalan is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Consultant Nephrologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-jose-jimmy",
        "name": "Dr. Jose Jimmy",
        "image": "assets/doctors/Dr.Jose-Jimmy.jpg",
        "specialization": "Dental Surgeon",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Jose Jimmy is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Dental Surgeon, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-merin-cherian",
        "name": "Dr. Merin Cherian",
        "image": "assets/doctors/Dr.Merin-Cherian.jpg",
        "specialization": "Orthodontist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Merin Cherian is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Orthodontist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-k-ajit",
        "name": "Dr. K. Ajit",
        "image": "assets/doctors/Dr.K-Ajit.jpg",
        "specialization": "CMO",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. K. Ajit is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in CMO, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-cijoy-joseph",
        "name": "Dr. Cijoy Joseph",
        "image": "assets/doctors/Dr.Cijoy-Joseph.jpg",
        "specialization": "RMO",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Cijoy Joseph is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in RMO, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-joseph-george",
        "name": "Dr. Joseph George",
        "image": "assets/doctors/Dr.Joseph-George.jpg",
        "specialization": "Orthopedic Surgeon",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Joseph George is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Orthopedic Surgeon, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-nithya-nathan",
        "name": "Dr. Nithya Nathan",
        "image": "assets/doctors/Dr.Nithya-Nathan.jpg",
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Nithya Nathan is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Gynecologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-yashna-v",
        "name": "Dr. Yashna V",
        "image": "assets/doctors/Dr.Yashna-V.jpg",
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Yashna V is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Gynecologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-sreedhanya",
        "name": "Dr. Sreedhanya",
        "image": "assets/doctors/sree.png",
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Sreedhanya is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Ophthalmologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-anagha",
        "name": "Dr. Anagha",
        "image": "assets/doctors/anagha.png",
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Anagha is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Dermatologist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-delcine-maria-jose",
        "name": "Dr. Delcine Maria Jose",
        "image": "assets/doctors/delcine.png",
        "specialization": "Consultant Psychiatrist",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Delcine Maria Jose is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in Consultant Psychiatrist, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    },
    {
        "id": "dr-sam-koruth",
        "name": "Dr. Sam Koruth",
        "image": "assets/doctors/sam.png",
        "specialization": "General Surgery",
        "qualification": "MBBS, MD",
        "experience": "10+ Years",
        "about": "Dr. Sam Koruth is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in General Surgery, they specialize in advanced treatments and evidence-based medical practices.",
        "achievements": [
            "Gold Medalist",
            "Published numerous research papers",
            "Member of Medical Association"
        ]
    }
];