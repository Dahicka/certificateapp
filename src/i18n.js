import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navigationBar: {
            start: "Start",
            machineLearning: "Machine Learning",
            example1: "Example 1",
            example2: "Example 2",
            example3: "Example 3",
            language: "Language:",
            user: "User: "
          },
          certificatePage: {
            supplier: "Supplier",
            certificateType: "Certificate type",
            validFrom: "Valid from",
            newCertificate: "New certificate",
            validTo: "Valid to",
            editCertificate: "Edit certificate",
            selectYourOption: "Select your option",
            selectDate: "Click to select date",
            submit: "Submit",
            assignedUsers: "Assigned users",
            addParticipant: "Add participant",
            newComment: "New comment",
            comment: "Comment",
            required: "Required",
            edit: "Edit",
            delete: "Delete",
            supplierName: "Supplier name",
            supplierIndex: "Supplier index",
            supplierCity: "City"
          },
          newParticipant: {
            name: "Name",
            department: "Department",
            email: "E-mail",
            lastName: "Last name",
            userID: "User ID",
            plant: "Plant",
            searchForSuppliers: "Search for suppliers",
            searchForPersons: "Search for persons",
            searchCriteria: "Search Criteria",
            personList: "Person List",
            supplierList: "Supplier List",
            search: "Search",
            reset: "Reset",
            select: "Select",
            cancel: "Cancel",
          },
        },
      },
      ba: {
        translation: {
          navigationBar: {
            start: "Početak",
            machineLearning: "Mašinsko učenje",
            example1: "Primjer 1",
            example2: "Primjer 2",
            example3: "Primjer 3",
            language: "Jezik:",
            user: "Korisnik: "
          },
          certificatePage: {
            supplier: "Dobavljač",
            certificateType: "Tip certifikata",
            validFrom: "Vrijedi od",
            newCertificate: "Novi certifikat",
            validTo: "Vrijedi do",
            editCertificate: "Uredi certifikat",
            selectYourOption: "Odaberite opciju",
            selectDate: "Kliknite za odabir datuma",
            submit: "Predaj",
            assignedUsers: "Dodijeljeni korisnici",
            addParticipant: "Dodajte učesnika",
            newComment: "Novi komentar",
            comment: "Komentar",
            required: "Obavezno",
            edit: "Uredi",
            delete: "Obriši",
            supplierName: "Ime dobavljača",
            supplierIndex: "Indeks dobavljača",
            supplierCity: "Grad"
          },
          newParticipant: {
            name: "Ime",
            department: "Odjel",
            email: "E-mail",
            lastName: "Prezime",
            userID: "Korisnički ID",
            plant: "Postrojenje",
            searchForSuppliers: "Pretraži dobavljače",
            searchForPersons: "Pretraži za osobe",
            searchCriteria: "Kriterij pretraživanja",
            personList: "Lista osoba",
            supplierList: "Lista dobavljača",
            search: "Pretraži",
            reset: "Resetuj",
            select: "Odaberi",
            cancel: "Cancel",
          }
        },
      },
    },
  });

export default i18n;