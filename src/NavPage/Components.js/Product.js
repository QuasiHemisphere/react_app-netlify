import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import SearchForm from "./SearchForm";

const Product = ({ setRecieptHistory, productCopy, setProductCopy }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("productStoragess")) || [
      {
        id: 1,
        label: "ACETAZOLAMIDE",
        description: "CETAMID",
        gram: 250,
        gramType: "MG",
        type: "tablet",
        count: 200,
        price: 18.0,
        bgColor: "#8AACDE",
        sales: 25,
      },
      {
        id: 2,
        label: "ACETYLCYSTEINE",
        description: "ACTEINSAPH",
        gram: 600,
        gramType: "MG",
        type: "Tablet",
        count: 300,
        price: 23.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 3,
        label: "ACICLOVIR",
        description: "ZEALOR",
        gram: 400,
        gramType: "MG",
        type: "Tablet",
        count: 300,
        price: 15.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 4,
        label: "ACICLOVIR",
        description: "ZEALOR",
        gram: 400,
        gramType: "MG",
        type: "Tablet",
        count: 300,
        price: 29.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 5,
        label: "ACICLOVIR",
        description: "XYCLOVIRAX FORTE",
        gram: 800,
        gramType: "MG",
        type: "Tablet",
        count: 300,
        price: 63.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 6,
        label: "ACICLOVIR",
        description: "UNDEFINED",
        gram: 800,
        gramType: "MG",
        type: "Tablet",
        count: 300,
        price: 64.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 7,
        label: "ALL-IN-ONE-MIXTURES",
        description: "NUTRIFLEX LIPID PERO",
        gram: 1400,
        gramType: "KCAL",
        type: "KCAL",
        count: 300,
        price: 2975.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 8,
        label: "ALLOPURINOL",
        description: "URISOL",
        gram: 100,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 1.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 9,
        label: "ALPRAZOLAM",
        description: "XANOR",
        gram: 500,
        gramType: "mcg",
        type: "Tablet",
        count: 300,
        price: 21.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 10,
        label: "AMIKACIN",
        description: "COCINE",
        gram: 100,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 89.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 11,
        label: "AMIKACIN",
        description: "COCINE",
        gram: 250,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 83.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 12,
        label: "AMIKACIN",
        description: "CINMIK",
        gram: 500,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 104.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 13,
        label: "AMIKACIN",
        description: "COCINE",
        gram: 500,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 135.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 14,
        label: "AMINOPHYLLINE",
        description: "AMINOSOL",
        gram: 25,
        gramType: "mg",
        type: "Undefined",
        count: 300,
        price: 55.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 15,
        label: "AMIODARONE",
        description: "TRIODONE",
        gram: 200,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 14.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 16,
        label: "AMIODARONE",
        description: "RHTYMA",
        gram: 150,
        gramType: "mg",
        type: "Undefined",
        count: 300,
        price: 951.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 17,
        label: "AMLODIPINE",
        description: "AMDIPINE",
        gram: 5,
        gramType: "mg",
        type: "Undefined",
        count: 300,
        price: 0.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 18,
        label: "AMOXICILLIN",
        description: "AMBIMOX",
        gram: 500,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 0.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 19,
        label: "AMOXICILLIN",
        description: "AXMEL",
        gram: 150,
        gramType: "mg",
        type: "Suspension",
        count: 300,
        price: 75.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 20,
        label: "AMPICILLIN",
        description: "UNDEFINED",
        gram: 500,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 75.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 21,
        label: "AMPICILLIN",
        description: "UNDEFINED",
        gram: 1,
        gramType: "g",
        type: "Vial",
        count: 300,
        price: 53.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 22,
        label: "AMPICILLIN",
        description: "SULBACIN",
        gram: 1,
        gramType: "g",
        type: "Powder",
        count: 300,
        price: 65.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 23,
        label: "ARIPIPRAZOLE",
        description: "ABILIFY DISCMELT",
        gram: 15,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 255.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 24,
        label: "ASCORBIC ACID ",
        description: "MYREVIT-C",
        gram: 500,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 1.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 25,
        label: "ASCORBIC ACID ",
        description: "APCEE",
        gram: 100,
        gramType: "mg",
        type: "Syrup",
        count: 300,
        price: 67.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 26,
        label: "ASCORBIC ACID ",
        description: "APCEE",
        gram: 100,
        gramType: "mg",
        type: "Syrup",
        count: 300,
        price: 27.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 27,
        label: "ASPIRIN",
        description: "ASPITOR",
        gram: 80,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 0.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 28,
        label: "AZITHROMYCIN",
        description: "AZTROZIN",
        gram: 500,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 289.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 29,
        label: "AZITHROMYCIN",
        description: "ZITHROCARE",
        gram: 200,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 255.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 30,
        label: "BARICITINIB",
        description: "BARICITINIB",
        gram: 4,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 495.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 31,
        label: "BENZYLPENICILLIN",
        description: "BARICITINIB",
        gram: 600,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 495.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 32,
        label: "BETAHISTINE",
        description: "VERIST-8",
        gram: 8,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 495.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 33,
        label: "BIPERIDEN",
        description: "AKETON",
        gram: 2,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 6.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 34,
        label: "BUDESONIDE",
        description: "BUDEXA",
        gram: 250,
        gramType: "mcg",
        type: "Tablet",
        count: 300,
        price: 67.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 35,
        label: "BUTHORPHANOL",
        description: "ZINOL",
        gram: 2,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 574.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 36,
        label: "CARBOPROST",
        description: "EVAPROST",
        gram: 250,
        gramType: "mcg",
        type: "Ampule",
        count: 300,
        price: 291.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 37,
        label: "CARVEDILOL",
        description: "CARVIDOL",
        gram: 6.25,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 1.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 38,
        label: "CEFALEXIN",
        description: "SAPHLEXIN",
        gram: 500,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 3.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 39,
        label: "CEFIXIME",
        description: "SAPHIXIME",
        gram: 200,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 10.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 40,
        label: "CEFIXIME",
        description: "EVOFIX",
        gram: 100,
        gramType: "mg",
        type: "Bottle",
        count: 300,
        price: 185.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 41,
        label: "CEFOTAXIME",
        description: "CEFOTAX",
        gram: 500,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 1225.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 42,
        label: "CEFOXITIN",
        description: "UNDEFINED",
        gram: 1,
        gramType: "g",
        type: "Vial",
        count: 300,
        price: 185.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 43,
        label: "CEFTAZIDIME",
        description: "ZEFTACARE",
        gram: 1,
        gramType: "g",
        type: "Vial",
        count: 300,
        price: 53.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 44,
        label: "CEFTRIAXONE",
        description: "ROXON",
        gram: 1,
        gramType: "g",
        type: "Vial",
        count: 300,
        price: 24.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 45,
        label: "CELECOXIB",
        description: "SAPHLECOX",
        gram: 200,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 4.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 46,
        label: "CETIRIZINE",
        description: "ALLECUR",
        gram: 10,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 0.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 47,
        label: "CHLORPOMAZINE",
        description: "GLOBAZINE",
        gram: 100,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 3.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 48,
        label: "CHLORPOMAZINE",
        description: "GLOBAZINE",
        gram: 200,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 4.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 49,
        label: "CINNARIZINE",
        description: "GORIZINE",
        gram: 25,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 1.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 50,
        label: "CIPROFLOXACIN",
        description: "ACIPRO",
        gram: 2,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 26.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 51,
        label: "CIPROFLOXACIN",
        description: "UNDEFINED",
        gram: 2,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 96.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 52,
        label: "CLARITHROMYCIN",
        description: "CLARITHROCID",
        gram: 500,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 14.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 53,
        label: "CLINDAMYCIN",
        description: "CLIN-GEN",
        gram: 300,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 6.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 54,
        label: "CLINDAMYCIN",
        description: "DALACIN",
        gram: 150,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 92.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 55,
        label: "CLONAZEPAM",
        description: "CLONOTRIL",
        gram: 2,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 10.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 56,
        label: "CLONIDINE",
        description: "CATAPIN",
        gram: 150,
        gramType: "mcg",
        type: "Ampule",
        count: 300,
        price: 125.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 57,
        label: "CLOXACILLIN",
        description: "PHILCLOX",
        gram: 500,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 3.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 58,
        label: "CLOXACILLIN",
        description: "DIALOX",
        gram: 250,
        gramType: "mg",
        type: "Susension",
        count: 300,
        price: 46.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 59,
        label: "CLOZAPINE",
        description: "CLOPIXENE",
        gram: 100,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 9.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 60,
        label: "CLOZAPINE",
        description: "SIZOPIN",
        gram: 100,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 80.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 61,
        label: "CO-AMOXICLAV ",
        description: "ACLAV",
        gram: 625,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 18.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 62,
        label: "DEXAMETHASONE",
        description: "DEXAMAK",
        gram: 4,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 159.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 63,
        label: "DIAZEPAM",
        description: "VALIUM",
        gram: 5,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 110.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 64,
        label: "DIGOXIN",
        description: "LANOXIN",
        gram: 250,
        gramType: "mcg",
        type: "Tablet",
        count: 300,
        price: 5.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 65,
        label: "DIGOXIN",
        description: "CARDIOXIN",
        gram: 250,
        gramType: "mcg",
        type: "Tablet",
        count: 300,
        price: 133.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 66,
        label: "DIPHENHYDRAMINE",
        description: "BEXIL",
        gram: 50,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 30.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 67,
        label: "DOMPERIDONE",
        description: "DOMPEDONE",
        gram: 10,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 2.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 68,
        label: "DONEPEZIL",
        description: "ZYPEZIL",
        gram: 10,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 39.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 69,
        label: "DOPAMINE",
        description: "DOPAN",
        gram: 40,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 171.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 70,
        label: "ENOXAPARIN",
        description: "HEPACLEX",
        gram: 60,
        gramType: "mg",
        type: "Pfs",
        count: 300,
        price: 171.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 71,
        label: "ENOXAPARIN",
        description: "NOXAGET",
        gram: 40,
        gramType: "mg",
        type: "Pfs",
        count: 300,
        price: 129.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 72,
        label: "EPINEPHRINE",
        description: "UNDEFINED",
        gram: 1,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 29.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 73,
        label: "EQUIRAB",
        description: "UNDEFINED",
        gram: 200,
        gramType: "ml",
        type: "Vial",
        count: 300,
        price: 975.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 74,
        label: "ERYTHROMYCIN",
        description: "ERZIN",
        gram: 500,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 5.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 75,
        label: "ERYTHROMYCIN EYE OINTMENT",
        description: "ERYZIN",
        gram: 5,
        gramType: "mg",
        type: "Undefined",
        count: 300,
        price: 140.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 76,
        label: "ESCITALOPRAM",
        description: "LEXDIN",
        gram: 10,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 11.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 77,
        label: "FENOFIBRATE",
        description: "FENO-TG",
        gram: 160,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 34.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 78,
        label: "FINASTERIDE",
        description: "FINAPROS",
        gram: 5,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 12.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 79,
        label: "FLUCONAZOLE",
        description: "DIFLUVID",
        gram: 150,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 70.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 80,
        label: "FLUCONAZOLE",
        description: "FUNGICAN",
        gram: 2,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 371.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 81,
        label: "FLUOXETINE",
        description: "PRODIN",
        gram: 20,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 29.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 82,
        label: "FLUOXETINE",
        description: "PRODIN",
        gram: 20,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 26.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 83,
        label: "FLUPENTIXOL",
        description: "FLUANXOL",
        gram: 20,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 399.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 84,
        label: "FUROSEMIDE",
        description: "ROSEMIDE",
        gram: 10,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 6.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 85,
        label: "GABAPENTIN",
        description: "GABIX",
        gram: 300,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 7.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 86,
        label: "GENTAMICIN",
        description: "MAXIGEN",
        gram: 40,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 6.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 87,
        label: "GLICLAZIDE",
        description: "SAPHCLAZIDE",
        gram: 80,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 5.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 88,
        label: "HALOPERIDOL",
        description: "PERIDOL",
        gram: 5,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 4.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 90,
        label: "HALOPERIDOL",
        description: "SEREDOL",
        gram: 5,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 529.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 91,
        label: "HYDROCORTISONE",
        description: "STERICORT",
        gram: 250,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 25.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 92,
        label: "HYDROCORTISONE",
        description: "STERICORT",
        gram: 250,
        gramType: "mg",
        type: "Vial",
        count: 300,
        price: 64.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 93,
        label: "HYDROXYETHYL STARCH",
        description: "SANBE HEST 130",
        gram: 500,
        gramType: "ml",
        type: "Bag",
        count: 300,
        price: 615.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 94,
        label: "HYDROXYUREA",
        description: "HYDOC",
        gram: 500,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 19.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 95,
        label: "HYOSCINE",
        description: "SPASMOCIN",
        gram: 20,
        gramType: "mg",
        type: "Capsule",
        count: 300,
        price: 24.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 96,
        label: "HYPERTONIC LACTATE",
        description: "TOTILAC",
        gram: 250,
        gramType: "mg",
        type: "Bag",
        count: 300,
        price: 971.75,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 97,
        label: "HYPROMELLOS OPTHALMIC SOL'N",
        description: "ILUBE",
        gram: 3,
        gramType: "mg",
        type: "Bag",
        count: 300,
        price: 249.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 98,
        label: "NSULIN HUMAN",
        description: "UNDEFINED",
        gram: 150,
        gramType: "undefined",
        type: "undefined",
        count: 300,
        price: 363.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 99,
        label: "IRBESARTAN",
        description: "UNDEFINED",
        gram: 70.3,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 3.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 100,
        label: "IRBESARTAN",
        description: "UNDEFINED",
        gram: 150,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 23.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 101,
        label: "ISOSORBIDE DINITRATE",
        description: "ISOKET",
        gram: 1,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 196.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 102,
        label: "ISOSORBIDE MONONIRATE",
        description: "VASTROTE",
        gram: 60,
        gramType: "mg",
        type: "Tablet",
        count: 300,
        price: 9.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 103,
        label: "ISOXSUPRINE",
        description: "ISOXULIDE",
        gram: 5,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 358.0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 104,
        label: "IRON SUCROSE",
        description: "CLFER",
        gram: 20,
        gramType: "mg",
        type: "Ampule",
        count: 300,
        price: 360.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 105,
        label: "I.V.FLUIDS 5% DEXTROSE IN 0.3%",
        description: "D5 0.3 NaCl",
        gram: 500,
        gramType: "ml",
        type: "Bottle",
        count: 300,
        price: 36.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 106,
        label: "I.V.FLUIDS 5% DEXTROSE IN 0.3%",
        description: "D5 0.3 NaCl",
        gram: 1,
        gramType: "l",
        type: "Bottle",
        count: 300,
        price: 0,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 107,
        label: "I.V. FLUIDS 5% DEXTROSE IN WATER",
        description: "D5 WATER",
        gram: 250,
        gramType: "ml",
        type: "Bottle (P)",
        count: 300,
        price: 67.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 108,
        label: "I.V. FLUIDS 5% DEXTROSE IN WATER",
        description: "D5 WATER",
        gram: 250,
        gramType: "ml",
        type: "Bottle (G)",
        count: 300,
        price: 89.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 109,
        label: "I.V. FLUIDS 5% DEXTROSE IN WATER",
        description: "D5 WATER",
        gram: 250,
        gramType: "ml",
        type: "Bottle",
        count: 300,
        price: 102.5,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 109,
        label: "I.V. FLUIDS 5% DEXTROSE IN WATER",
        description: "D5 WATER",
        gram: 500,
        gramType: "ml",
        type: "Bottle",
        count: 300,
        price: 36.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 110,
        label: "I.V. FLUIDS 10% DEXTROSE IN WATER",
        description: "D10 WATER",
        gram: 500,
        gramType: "ml",
        type: "Bottle",
        count: 300,
        price: 37.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 111,
        label:
          "I.V. FLUIDS BALANCE MULTIPLE MAINTENACE SOLUTION WITH 5% DEXTROSE",
        description: "D5 NM",
        gram: 1,
        gramType: "l",
        type: "Bottle",
        count: 300,
        price: 68.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
      {
        id: 112,
        label:
          "I.V. FLUIDS BALANCE MULTIPLE MAINTENACE SOLUTION WITH 5% DEXTROSE",
        description: "D5 IMB",
        gram: 500,
        gramType: "ml",
        type: "Bottle",
        count: 300,
        price: 36.25,
        bgColor: "#8AACDE",
        sales: 0,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("productStoragess", JSON.stringify(products));
  }, [products]);

  const addItem = (
    label,
    description,
    gram,
    gramType,
    type,
    count,
    price,
    sales,
    bgColor
  ) => {
    const genId = products.length ? products[products.length - 1].id + 1 : 1;

    const myNewProducts = {
      genId,
      label,
      description,
      gram,
      gramType,
      type,
      count,
      price,
      sales,
      bgColor,
    };
    const ListItem = [...products, myNewProducts];

    setProducts(ListItem);
  };

  setProductCopy([...products]);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       const ListItems = await response.json();
  //       console.log(ListItems);
  //       setProducts(ListItems);
  //     } catch (err) {
  //       console.log(err.stack);
  //     }
  //   };
  //   (async () => await fetchItems())();
  // }, []);

  const [reveal, setReveal] = useState("none");

  const [newLabel, setNewLabel] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newWghtType, setNewWghtType] = useState("");
  const [newMedType, setNewMedType] = useState("");
  const [newPiece, setNewPiece] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newSales, setNewSales] = useState("");
  const [newBgColor, setNewBgColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const addItem = (
      label,
      description,
      gram,
      gramType,
      type,
      count,
      price,
      sales,
      bgColor
    ) => {
      const genId = products.length ? products[products.length - 1].id + 1 : 1;

      const myNewProducts = {
        genId,
        label,
        description,
        gram,
        gramType,
        type,
        count,
        price,
        sales,
        bgColor,
      };

      const listItem = [...products, myNewProducts];
      setProducts(listItem);
    };
    if (
      !newLabel &&
      !newDesc &&
      !newWeight &&
      !newWghtType &&
      !newMedType &&
      !newPiece &&
      !newPrice &&
      !newSales &&
      !newBgColor
    )
      return;
    setNewLabel("");
    setNewDesc("");
    setNewWeight("");
    setNewWghtType("");
    setNewMedType("");
    setNewPiece("");
    setNewPrice("");
    setNewSales("");
    setNewBgColor("");

    const numWeight = Number(newWeight);
    const numPieces = Number(newPiece);
    const numPrice = Number(newPrice);
    const upperLabel = newLabel.toUpperCase();
    const upperDesc = newDesc.toUpperCase();
    const numSales = Number(newSales);

    addItem(
      upperLabel,
      upperDesc,
      numWeight,
      newWghtType,
      newMedType,
      numPieces,
      numPrice,
      numSales,
      newBgColor
    );
  }

  const [updtLabel, setUpdtLabel] = useState("");
  const [updtDesc, setUpdtDesc] = useState("");
  const [updtWeight, setUpdtWeight] = useState("");
  const [updtWType, setUpdtWType] = useState("");
  const [updtMType, setUpdtMtype] = useState("");
  const [updtPieces, setUpdtPieces] = useState("");
  const [updtId, setUpdtId] = useState("");
  const [updtPrice, setUpdtPrice] = useState("");
  const [updtSale, setUpdtSale] = useState("");
  const [alert, setAlert] = useState("#8AACDE");

  function handleState() {
    if (reveal === "none") {
      setReveal("");
      setHideSelf("none");
      setHideBoth("none");
      setHidePlusBtn("none");
    } else {
      setReveal("none");
      setHideSelf("");
      setHideBoth("");
      setHidePlusBtn("");
    }
  }
  function handleUpdate(id) {
    if (hideBoth === "none") {
      setHideBoth("");
      setHidePlusBtn("");
    } else {
      setHideBoth("none");
      setHidePlusBtn("none");
    }
    setUpdtId(id);
    products.map((product) => {
      if (product.id === id) {
        setUpdtLabel(product.label);
        setUpdtDesc(product.description);
        setUpdtWeight(product.gram);
        setUpdtWType(product.gramType);
        setUpdtMtype(product.type);
        setUpdtPrice(product.price);
        setUpdtPieces(product.count);
        setUpdtSale(product.sales);
      }
    });
    handleState();
  }

  function handleUpdatedProduct(
    id,
    label,
    desc,
    gram,
    gramT,
    medT,
    medP,
    price,
    sales
  ) {
    const listItem = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          label: label,
          description: desc,
          gram: gram,
          gramType: gramT,
          type: medT,
          count: medP,
          price: price,
          sales: sales,
          bgColor: alert,
        };
      } else {
        return product;
      }
    });
    setProducts(listItem);
  }

  function handleChanges(e) {
    e.preventDefault();

    if (
      !updtLabel &&
      !updtDesc &&
      !updtWeight &&
      !updtWType &&
      !updtMType &&
      !updtPieces &&
      !updtId &&
      !updtPrice &&
      !updtSale &&
      !alert
    )
      return;

    setUpdtLabel("");
    setUpdtDesc("");
    setUpdtWeight("");
    setUpdtWType("");
    setUpdtMtype("");
    setUpdtPieces("");
    setUpdtPrice("");
    setUpdtSale("");
    setUpdtId("");

    const numWeight = Number(updtWeight);
    const numPieces = Number(updtPieces);
    const numPrice = Number(updtPrice);
    const upperLabel = updtLabel.toUpperCase();
    const upperDesc = updtDesc.toUpperCase();
    const numSale = Number(updtSale);

    handleUpdatedProduct(
      updtId,
      upperLabel,
      upperDesc,
      numWeight,
      updtWType,
      updtMType,
      numPieces,
      numPrice,
      numSale
    );
  }
  const [hideSelf, setHideSelf] = useState("none");

  function handleDeleteItem(id) {
    const listItem = products.filter((product) => product.id !== id);
    setProducts(listItem);
  }

  const [display, setDisplay] = useState("none");

  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");
  const [gram, setGram] = useState("");
  const [gramType, setGramType] = useState("");
  const [medType, setMedType] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [def, setDef] = useState();
  // console.log(label);
  // console.log(desc);
  // console.log(gram);
  // console.log(gramType);
  // console.log(medType);
  // console.log(id);
  // console.log(price);
  // console.log(def);

  function addToCart(labels, descriptions, grams, gramTs, type, ids, prices) {
    if (display === "none") {
      setDisplay("");
      setDef("");
    } else {
      setDisplay("none");
    }
    setLabel(labels);
    setDesc(descriptions);
    setGram(grams);
    setGramType(gramTs);
    setMedType(type);
    setId(ids);
    setPrice(prices);
    setDef("");
  }
  const [reciept, setReciept] = useState([]);
  const calculateTotalPrice = () => {
    return reciept.reduce((total, reciepts) => total + reciepts.totPrice, 0);
  };

  const transactionNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };
  const totalPrice = calculateTotalPrice();
  const transactionNumbers = transactionNumber();

  const [mySale, setMySale] = useState("");
  console.log(mySale);

  function handleCart(e) {
    e.preventDefault();
    if (display === "none") {
      setDisplay("");
    } else {
      setDisplay("none");
    }

    const ListItem = products.map((items) =>
      items.id === id
        ? {
            ...items,
            sales: (items.sales += Number(mySale)),
            count: items.count - Number(mySale),
          }
        : items
    );
    setProducts(ListItem);

    setDef();

    const addItem = () => {
      const myNewProducts = {
        id,
        label,
        desc,
        gram,
        gramType,
        medType,
        price,
        def,
        totPrice,
      };

      const listItem = [...reciept, myNewProducts];
      setReciept(listItem);
    };
    const defToNum = Number(def);
    let totPrice = price * defToNum;

    addItem(id, label, desc, gram, gramType, medType, price, def, totPrice);
  }

  function handleCancel() {
    if (display === "none") {
      setDisplay("");
    } else {
      setDisplay("none");
    }
    setDef();
  }
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem);
  const toUpper = searchItem.toUpperCase();

  const filterProducts = () => {
    return products.filter((product) =>
      product.label.toUpperCase().includes(searchItem.toUpperCase())
    );
  };

  const filteredProducts = filterProducts();

  const ListItems = filteredProducts.map((product) => (
    <section className="section" style={{ background: product.bgColor }}>
      <ul className="card-container">
        <nav className="edit-card">
          <span className="sales">{product.sales} sales</span>
          <i
            className="fa-regular fa-pencil"
            onClick={() => handleUpdate(product.id)}></i>
          <i
            className="fa-regular fa-trash"
            onClick={() => handleDeleteItem(product.id)}></i>
        </nav>
        <li className="card-list">
          <h1 className="card-title">{product.label}</h1>
          <div className="elipsis">
            <h3 className="card-desc">{product.description}</h3>
          </div>
          <h4 className="card-grm">
            {product.gram}
            {product.gramType}
          </h4>{" "}
          <h6 className="card-typ">{product.type}</h6>
          <h6 className="card-cnt">{product.count}pcs remaining</h6>
          <h6 className="card-prc">{product.price}php</h6>
        </li>
        <form className="card-form">
          <nav className="counter">
            <i
              className="fa-regular fa-shop count-icon cart card-icon"
              onClick={() =>
                addToCart(
                  product.label,
                  product.description,
                  product.gram,
                  product.gramType,
                  product.type,
                  product.id,
                  product.price
                )
              }></i>
          </nav>
        </form>
      </ul>
    </section>
  ));

  const [revealForm, setRevealForm] = useState("none");
  const [formButton, setFormButton] = useState(
    "fa-regular fa-plus add-prod-icon"
  );
  function handleForm() {
    if (revealForm === "none") {
      setFormButton("fa-regular fa-cancel add-prod-icon");
      setRevealForm("");
      setHideBoth("none");
    } else {
      setRevealForm("none");
      setFormButton("fa-regular fa-plus add-prod-icon");
      setHideBoth("");
    }
  }
  const [hidePlusBtn, setHidePlusBtn] = useState("");
  const [cartBtnPoss, setCartBtnPoss] = useState("180px");
  const [displayShopCart, setDisplayShopCart] = useState("none");
  function handleShopCart() {
    if (displayShopCart === "none") {
      setDisplayShopCart("");
      setHidePlusBtn("none");
      setCartBtnPoss("90px");
    } else {
      setDisplayShopCart("none");
      setHidePlusBtn("");
      setCartBtnPoss("180px");
    }
  }
  const [hideBoth, setHideBoth] = useState("");

  function clearCart() {
    setReciept([]);
  }

  const recieptDate = new Date();
  const dateSave = recieptDate.toString();

  function handleRecieptSubmit(e) {
    e.preventDefault();
    setRecieptHistory((prevHistory) => [
      ...prevHistory,
      {
        items: reciept,
        total: totalPrice,
        recieptNumber: transactionNumbers,
        recieptDate: dateSave,
      },
    ]);

    clearCart();
  }

  return (
    <div className="prod">
      {products.length ? (
        <section className="search-item">
          <SearchForm searchItem={searchItem} setSearchItem={setSearchItem} />
          <main className="product">{ListItems}</main>
        </section>
      ) : (
        <header className="empty-message">
          <h1 className="empty-message-two">Your product list is empty!</h1>
          <h6>
            Add products here
            <span>
              <i className="fa-regular fa-arrow-right fa-bounce"></i>
            </span>
          </h6>
        </header>
      )}

      <AddProduct
        revealForm={revealForm}
        newLabel={newLabel}
        setNewLabel={setNewLabel}
        newDesc={newDesc}
        setNewDesc={setNewDesc}
        newWeight={newWeight}
        setNewWeight={setNewWeight}
        newWghtType={newWghtType}
        newMedType={newMedType}
        setNewMedType={setNewMedType}
        newPiece={newPiece}
        setNewPiece={setNewPiece}
        setNewWghtType={setNewWghtType}
        handleSubmit={handleSubmit}
        newBgColor={newBgColor}
        setNewBgColor={setNewBgColor}
        handleUpdate={handleUpdate}
        newPrice={newPrice}
        setNewPrice={setNewPrice}
        newSales={newSales}
        setNewSales={setNewSales}
      />
      <section className="product-form">
        <form
          className="shop-reciept"
          style={{ display: displayShopCart }}
          onSubmit={handleRecieptSubmit}>
          {reciept.length ? (
            <>
              <div className="my-div">
                <header className="cart-header">
                  <h1>Pharmacy Name</h1>
                  <i
                    className="fa-regular fa-arrow-rotate-left"
                    onClick={clearCart}></i>
                </header>

                <h6 className="transaction">
                  Transaction number: {transactionNumbers}
                </h6>

                {reciept.map((reciept) => (
                  <ul className="receipt-container">
                    <li className="receipt-list">
                      <div className="receipt-row">
                        <div className="box">{reciept.id}</div>
                        <div className="receipt-header">
                          <h4 className="r-label">{reciept.label}</h4>
                          <h6 className="r-desc">{reciept.desc}</h6>
                        </div>
                        <div className="receipt-count">
                          <h4>{reciept.def}</h4>
                          <h4>{reciept.totPrice}</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
              <nav className="r-nav">
                <div>
                  <h4>Total: {totalPrice} php</h4>
                </div>
                <button
                  className="r-button"
                  onClick={(e) => handleRecieptSubmit(e, reciept.id)}>
                  Print Receipt
                </button>
              </nav>
            </>
          ) : (
            <div className="empty-cart">
              <h1 className="empty-cart-message">
                Currently no items to be listed
              </h1>
            </div>
          )}
        </form>
      </section>
      <section>
        <form
          className="add-to-cart"
          style={{ display: display }}
          onSubmit={handleCart}>
          <div>
            <h6 className="id">Product id: {id}</h6>
            <h5 className="label">{label}</h5>
            <h3 className="desc">{desc}</h3>
            <h6 className="gram">
              {gram}
              {gramType}
            </h6>
            <h6 className="type">{medType}</h6>
            <h6 className="price">{price} pesos</h6>
          </div>
          <div className="count">
            <input
              className="counts"
              type="number"
              name="count"
              id="count"
              placeholder="0"
              required
              autoFocus
              value={def}
              onChange={(e) => setDef(e.target.value)}
            />
          </div>
          <nav>
            <button className="confirm" onClick={() => setMySale(def, id)}>
              CONFIRM
            </button>
            <button className="cancel" onClick={handleCancel}>
              CANCEL
            </button>
          </nav>
        </form>
      </section>
      <UpdateProduct
        reveal={reveal}
        setReveal={setReveal}
        handleUpdate={handleUpdate}
        handleChanges={handleChanges}
        products={products}
        setProducts={setProducts}
        updtLabel={updtLabel}
        updtDesc={updtDesc}
        updtWeight={updtWeight}
        updtWType={updtWType}
        updtMType={updtMType}
        updtPieces={updtPieces}
        hideSelf={hideSelf}
        setHideSelf={setHideSelf}
        setUpdtLabel={setUpdtLabel}
        setUpdtDesc={setUpdtDesc}
        setUpdtWeight={setUpdtWeight}
        setUpdtWType={setUpdtWType}
        setUpdtMtype={setUpdtMtype}
        setUpdtPieces={setUpdtPieces}
        handleState={handleState}
        updtPrice={updtPrice}
        setUpdtPrice={setUpdtPrice}
        updtSale={updtSale}
        setUpdtSale={setUpdtSale}
      />

      <nav>
        <h6 className="cart-count"></h6>
        <i
          className="fa-regular fa-bag-shopping item-cart"
          onClick={handleShopCart}
          style={{ bottom: cartBtnPoss, display: hideBoth }}></i>
        <i
          className={formButton}
          onClick={handleForm}
          style={{ display: hidePlusBtn }}></i>
      </nav>
    </div>
  );
};

export default Product;
