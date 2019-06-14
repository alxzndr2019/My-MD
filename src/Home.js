import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Home.css";
const drugs = [
  {
    name: "Paracetamol capsules",
    dosage: "One pill",
    price: "100₦ per sachet",
    location: "CLOGMART PHARMACIES,ONIRU EXPRESSWAY LAGOS",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 1
  },
  {
    name: "Panadol",
    dosage: "4 pills",
    price: "100₦ per sachet",
    location: "Alpha Pharmacy & Stores Ltd, 2B Alabi ST Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 2
  },
  {
    name: "Methylated spirit",
    dosage: "Apply on Injury",
    price: "250₦",
    location: "Teem Care Pharmacy, 46 Coker Rd, Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 3
  },
  {
    name: "Hydrocortizon",
    dosage: "Apply on affected area before bed",
    price: "100₦",
    location: "Boluke Pharmacy Ikeja, Obafemi Awolowo wayLagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 4
  },
  {
    name: "Aboniki Balm",
    dosage: "Apply and Massage",
    price: "150₦",
    location: "HealthPlus Pharmacy, Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 5
  },
  {
    name: "Tetracycline",
    dosage: "One pill Morning and Night",
    price: "100₦ per sachet",
    location: "Bernados Pharmacy,Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 6
  },
  {
    name: "Doxycycline",
    dosage: "One pill Morning abd Evening",
    price: "100₦ per sachet",
    location: "Medplus Pharmacy,Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 7
  },
  {
    name: "Tutolin",
    dosage: "1ml morning,afternoon and evening",
    price: "300₦",
    location: "Boluke Pharmacy Ikeja ,Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 8
  },
  {
    name: "Tylenol",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦ per sachet",
    location: "Asset Pharmacy Ikeja, Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 9
  },
  {
    name: "Abelcet",
    dosage: "One pill morning and evening",
    price: "100₦ p/s",
    location: "Tonyson Pharmacy and Store, Lagos",
    drug_interaction: "Mouth",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 10
  },
  {
    name: "Abilify",
    dosage: "One pill morning only",
    price: "100₦ per sachet",
    location: "A.Pharmacy, Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 11
  },
  {
    name: "Abraxane",
    dosage: "Apply on affected area before bed",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 12
  },
  {
    name: "Abreva",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 13
  },
  {
    name: "Bandage",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 14
  },
  {
    name: "Abstral",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 15
  },
  {
    name: "Acanya",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 16
  },
  {
    name: "Accolate",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 17
  },
  {
    name: "AccuNeb",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 18
  },
  {
    name: "Accupril",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 19
  },
  {
    name: "Bacitracin Injection",
    dosage: "Inject 2ml into the bloodstream",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 20
  },
  {
    name: "Bacitracin Ointment",
    dosage: "Apply on affected area before bed",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 21
  },
  {
    name: "Bacitracin Zin and Polymyxin B sulfate",
    dosage: "One pill",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 22
  },
  {
    name: "Baclofen",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 23
  },
  {
    name: "Bactrim/Bactrim DS",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 24
  },
  {
    name: "Bactroban",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 25
  },
  {
    name: "Cabergoline",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 26
  },
  {
    name: "Cabometyx",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 27
  },
  {
    name: "Caduet",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 28
  },
  {
    name: "Cafcit",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 29
  },
  {
    name: "Dacogen",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 30
  },
  {
    name: "Danazol",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 31
  },
  {
    name: "Haldol",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 32
  },
  {
    name: "Fabrazyme",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 33
  },
  {
    name: "Famvir",
    dosage: "One pill moring, afternoon and evening",
    price: "100₦",
    location: "Lagos",
    drug_interaction:
      "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
    drug_image_url: "",
    side_effects: {
      rare: [
        "Bloody or black, tarry stools",
        "bloody or cloudy urine",
        "fever with or without chills (not present before treatment and not caused by the condition being treated)",
        "pain in the lower back and/or side (severe and/or sharp)",
        "pinpoint red spots on the skin",
        "skin rash, hives, or itching",
        "sore throat (not present before treatment and not caused by the condition being treated)",
        "sores, ulcers, or white spots on the lips or in the mouth",
        "sudden decrease in the amount of urine"
      ]
    },
    id: 34
  }
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      type="search"
      variant="outlined"
      className={classes.textField}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}
function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="li">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : drugs.filter(drug => {
        const keep =
          count < 5 &&
          drug.name.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}
const styles = theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainer: {
    width: 30
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
      filteredData: [],
      selectedDrug: {
        name: "",
        dosage: "",
        price: "",
        location: "",
        drug_interaction: "",
        drug_image_url: "",
        id: "",
        description: "",
        side_effects: {
          rare: []
        },
        testimonials: {}
      },
      alldrugs: [
        {
          name: "Paracetamol capsules",
          dosage: "One pill",
          price: "100₦ per sachet",
          location: "CLOGMART PHARMACIES,ONIRU EXPRESSWAY LAGOS",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 1
        },
        {
          name: "Panadol",
          dosage: "4 pills",
          price: "100₦ per sachet",
          location: "Alpha Pharmacy & Stores Ltd, 2B Alabi ST Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 2
        },
        {
          name: "Methylated spirit",
          dosage: "Apply on Injury",
          price: "250₦",
          location: "Teem Care Pharmacy, 46 Coker Rd, Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 3
        },
        {
          name: "Hydrocortizon",
          dosage: "Apply on affected area before bed",
          price: "100₦",
          location: "Boluke Pharmacy Ikeja, Obafemi Awolowo wayLagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 4
        },
        {
          name: "Aboniki Balm",
          dosage: "Apply and Massage",
          price: "150₦",
          location: "HealthPlus Pharmacy, Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 5
        },
        {
          name: "Tetracycline",
          dosage: "One pill Morning and Night",
          price: "100₦ per sachet",
          location: "Bernados Pharmacy,Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 6
        },
        {
          name: "Doxycycline",
          dosage: "One pill Morning abd Evening",
          price: "100₦ per sachet",
          location: "Medplus Pharmacy,Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 7
        },
        {
          name: "Tutolin",
          dosage: "1ml morning,afternoon and evening",
          price: "300₦",
          location: "Boluke Pharmacy Ikeja ,Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 8
        },
        {
          name: "Tylenol",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦ per sachet",
          location: "Asset Pharmacy Ikeja, Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 9
        },
        {
          name: "Abelcet",
          dosage: "One pill morning and evening",
          price: "100₦ p/s",
          location: "Tonyson Pharmacy and Store, Lagos",
          drug_interaction: "Mouth",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 10
        },
        {
          name: "Abilify",
          dosage: "One pill morning only",
          price: "100₦ per sachet",
          location: "A.Pharmacy, Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 11
        },
        {
          name: "Abraxane",
          dosage: "Apply on affected area before bed",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 12
        },
        {
          name: "Abreva",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 13
        },
        {
          name: "Bandage",
          dosage: "One pill",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 14
        },
        {
          name: "Abstral",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 15
        },
        {
          name: "Acanya",
          dosage: "One pill",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 16
        },
        {
          name: "Accolate",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 17
        },
        {
          name: "AccuNeb",
          dosage: "One pill",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 18
        },
        {
          name: "Accupril",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 19
        },
        {
          name: "Bacitracin Injection",
          dosage: "Inject 2ml into the bloodstream",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 20
        },
        {
          name: "Bacitracin Ointment",
          dosage: "Apply on affected area before bed",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 21
        },
        {
          name: "Bacitracin Zin and Polymyxin B sulfate",
          dosage: "One pill",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 22
        },
        {
          name: "Baclofen",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 23
        },
        {
          name: "Bactrim/Bactrim DS",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 24
        },
        {
          name: "Bactroban",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 25
        },
        {
          name: "Cabergoline",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 26
        },
        {
          name: "Cabometyx",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 27
        },
        {
          name: "Caduet",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 28
        },
        {
          name: "Cafcit",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 29
        },
        {
          name: "Dacogen",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 30
        },
        {
          name: "Danazol",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 31
        },
        {
          name: "Haldol",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 32
        },
        {
          name: "Fabrazyme",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 33
        },
        {
          name: "Famvir",
          dosage: "One pill moring, afternoon and evening",
          price: "100₦",
          location: "Lagos",
          drug_interaction:
            "Ecotrin, Acetylsalicylic Acid, Aspir 81, Bayer Aspirin, Aspirin Low Strength, Bufferin, Arthritis Pain, Easprin, Ascriptin, Fasprin, Low Dose ASA, Buffered Aspirin, Aspir-Low, Durlaza, Ascriptin Enteric, Acuprin 81, Halfprin, Aspergum, Empirin, Bayer Children's Aspirin, Aspirin Lite Coat, Aspi-Cor, Aspirtab, Ecotrin Adult Low Strength, Ecotrin Maximum Strength, Entercote, Minitabs, St. Joseph Aspirin, Ascriptin Maximum Strength, Arthritis Foundation Pain Reliever, Bayer Aspirin with Heart Advantage, Bufferin Low Dose, Medi-Seltzer, Sloprin, St. Joseph 81 mg Chewable Aspirin, ZORprin, Aspiritab, Bayer Aspirin Extra Strength Plus, Buffex, Extra Strength Bayer, Genacote, Gennin-FC, Genprin, Litecoat Aspirin, Tri-Buffered Aspirin, Entaprin, Bufferin Arthritis Strength, Bufferin Extra Strength, Therapy Bayer, Stanback Analgesic, Norwich Aspirin, St. Joseph 81 mg Aspirin Enteric Safety-Coated, Ecpirin, Bayer Women's Aspirin With Calcium, Zero-Order Release, YSP Aspirin, Miniprin, Bayer Aspirin Regimen, Migralex, Heartline, Bayer Advanced Aspirin, Buffasal",
          drug_image_url: "",
          side_effects: {
            rare: [
              "Bloody or black, tarry stools",
              "bloody or cloudy urine",
              "fever with or without chills (not present before treatment and not caused by the condition being treated)",
              "pain in the lower back and/or side (severe and/or sharp)",
              "pinpoint red spots on the skin",
              "skin rash, hives, or itching",
              "sore throat (not present before treatment and not caused by the condition being treated)",
              "sores, ulcers, or white spots on the lips or in the mouth",
              "sudden decrease in the amount of urine"
            ]
          },
          id: 34
        }
      ],
      errorchk: "",
      path: "/Druginfo"
    };
  }
  
  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
    if (!drugs.includes(this.state.value)) {
      this.setState({
        errorchk: "We don't have that drug ☹"
      });
    }
    console.log(this.state.alldrugs)
  };
  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    this.setState({
      selectedDrug: {
        name: suggestion.name,
        dosage: suggestion.dosage,
        price: suggestion.price,
        location: suggestion.location,
        drug_interaction: suggestion.drug_interaction,
        drug_image_url: suggestion.drug_image_url,
        id: suggestion.id,
        side_effects: suggestion.side_effects
      }
    });
    if (suggestion === "") {
      this.setState({
        path: ""
      });
    } else {
      this.setState({
        path: "/Druginfo"
      });
    }
  };
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
    this.setState({
      errorchk: ""
    });
  };

  render() {
    const { classes } = this.props;
    const { value, suggestions } = this.state;
    const autosuggestProps = {
      renderInputComponent,
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.onSuggestionSelected,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <div className={classes.root}>
        <div id="herotext">
          <h1>
            Best Drug Search<span role="img">💊😊</span>
          </h1>
          <h6>For Everyone...</h6>
        </div>

        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: "Search for drugs",
            value,
            onChange: this.onChange
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />

        <div className={classes.divider} />
        <div>
          <Link
            to={{
              pathname: this.state.path,
              state: {
                selectedDrug: {
                  name: this.state.selectedDrug.name,
                  dosage: this.state.selectedDrug.dosage,
                  price: this.state.selectedDrug.price,
                  location: this.state.selectedDrug.location,
                  drug_interaction: this.state.selectedDrug.drug_interaction,
                  drug_image_url: this.state.selectedDrug.drug_image_url,
                  id: this.state.selectedDrug.id,
                  side_effects: this.state.selectedDrug.side_effects.rare
                }
              }
            }}
          >
            <div className="Results">
              <h6>{this.state.errorchk}</h6>
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              // onClick={this.handleClick()}
            >
              Search<span role="img">🔎</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
