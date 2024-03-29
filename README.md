# UP Web Architecture Practical Work
By Juan Manuel González Kapnik

Service idea: **Patient/Electronic Medical Record Management**

Server: **Medical Server**

## 🔗 Table of contents
1. [Patient](#patient)
2. [Medical Consultation](#records)
3. [Medic](#medic)

## 👨‍🦱 Patient <a name="patient"></a>

### `POST` /patient/{patientId}/uploadImage

Uploads patient image

**Parameters**:
1. patientId (required)
2. file

**Responses**:
1. 200 - Sucessful operation

### `POST` /patient

Add a new patient

**Parameters**:
1. body (required)
```json
{
    "id": 0,
    "name": "patientName",
    "birthDate": "patientBirthDate",
    "bloodType": "patientBloodType",
    "emergencyContact": [
        {
            "relation": "patientRelation",
            "phoneNumber": "patientContactNumber"
        }
    ],
    "photoUrls": [
        "pantientPhotoUrl"
    ],
    "lastPhysicalExaminationDate": "patientLastPhysicalExaminationDate",
    "diseases": [
        "patientDiseases"
    ],
    "medications": [
        "patientMedications"
    ],
    "notes": [
        "patientNotes"
    ],
    "status": "patientStatus"
}
```

**Responses**
1. 200 - Successful operation
2. 405 - Invalid input

### `PUT` /patient

Update a patient

**Parameters**:
1. body (required)
```json
{
    "id": 0,
    "name": "patientName",
    "birthDate": "patientBirthDate",
    "bloodType": "patientBloodType",
    "emergencyContact": [
        {
            "relation": "patientRelation",
            "phoneNumber": "patientContactNumber"
        }
    ],
    "photoUrls": [
        "pantientPhotoUrl"
    ],
    "lastPhysicalExaminationDate": "patientLastPhysicalExaminationDate",
    "diseases": [
        "patientDiseases"
    ],
    "medications": [
        "patientMedications"
    ],
    "notes": [
        "patientNotes"
    ],
    "status": "patientStatus"
}
```

**Responses**:
1. 400 - Invalid ID supplied
2. 404 - Patient not found
3. 405 - Validation exception

### `GET` /patient/findByStatus

Find patients by status

**Parameters**:
1. status (required)

**Responses**:
1. 200 - Successful operation
```json
{
    "id": 0,
    "name": "patientName",
    "birthDate": "patientBirthDate",
    "bloodType": "patientBloodType",
    "emergencyContact": [
        {
            "relation": "patientRelation",
            "phoneNumber": "patientContactNumber"
        }
    ],
    "photoUrls": [
        "pantientPhotoUrl"
    ],
    "lastPhysicalExaminationDate": "patientLastPhysicalExaminationDate",
    "diseases": [
        "patientDiseases"
    ],
    "medications": [
        "patientMedications"
    ],
    "notes": [
        "patientNotes"
    ],
    "status": "patientStatus"
}
```
2. 400 - Invalid status value
3. 404 - Patient not found

### `GET` /patient/{patientId}

Find patient by ID

**Parameters**:
1. patientId (required)

**Responses**:
1. 200 - Successful operation
```json
{
    "id": 0,
    "name": "patientName",
    "birthDate": "patientBirthDate",
    "bloodType": "patientBloodType",
    "emergencyContact": [
        {
            "relation": "patientRelation",
            "phoneNumber": "patientContactNumber"
        }
    ],
    "photoUrls": [
        "pantientPhotoUrl"
    ],
    "lastPhysicalExaminationDate": "patientLastPhysicalExaminationDate",
    "diseases": [
        "patientDiseases"
    ],
    "medications": [
        "patientMedications"
    ],
    "notes": [
        "patientNotes"
    ],
    "status": "patientStatus"
}
```
2. 400 - Invalid ID supplied
3. 404 - Patient not found

### `DELETE` /patient/{patientId}

Deletes a patient

**Parameters**:
1. patientId (required)

**Responses**:
1. 400 - Invalid ID supplied
2. 404 - Patient not found

## 📋 Medical Consultation <a name="records"></a>

### `POST` /consultation

Place a consultation for patient

**Parameters**:
1. body (required)
```json
{
    "id": 0,
    "patient_id": 0,
    "status": "consultationStatus",
    "date": "consultationDate",
    "complete": true
}
```

**Responses**:
1. 200 - Sucessful operation
2. 400 - Invalid consultation

### `GET` /consultation/{consultationId}
Find consultation by ID

**Parameters**:
1. consultationId (required)

**Responses**:

1. 200 - Successful operation
```json
{
    "id": 0,
    "patient_id": 0,
    "status": "consultationStatus",
    "date": "consultationDate",
    "complete": true
}
```
2. 400 - Invalid ID supplied
3. 404 - Consultation not found

### `DELETE` /consultation/{consultationId}

Deletes a consult

**Parameters**:
1. consultationId (required)

**Responses**:
1. 400 - Invalid ID supplied
2. 404 - Consultation not found

## 👨‍⚕️ Medic <a name="medic"></a>

### `POST` /medic

Add a new medic

**Parameters**:
1. body (required)
```json
{
    "id": 0,
    "username": "medicUsername",
    "password": "medicPassword",
    "name": "medicName"
}
```
**Responses**
1. 200 - Successful operation
2. 405 - Invalid input

### `PUT` /medic

Update a medic

**Parameters**:
1. body (required)
```json
{
    "id": 0,
    "username": "medicUsername",
    "password": "medicPassword",
    "name": "medicName"
}
```

**Responses**:
1. 400 - Invalid ID supplied
2. 404 - Medic not found
3. 405 - Validation exception

### `GET` /medic/{medicId}

Find medic by ID

**Parameters**:
1. medicId (required)

**Responses**:
1. 200 - Successful operation
```json
{
    "id": 0,
    "username": "medicUsername",
    "password": "medicPassword",
    "name": "medicName"
}
```
2. 400 - Invalid ID supplied
3. 404 - Medic not found

### `DELETE` /medic/{medicId}

Deletes a consult

**Parameters**:
1. medicId (required)

**Responses**:
1. 400 - Invalid ID supplied
2. 404 - Medic not found
