interface IPublication {
  authors: string;
  name: string;
  addition: string;
  link?: string;
}

interface IPublications {
  year: number;
  publications: IPublication[];
}

export const PublicationsDto: IPublications[] = [
  {
    year: 2024,
    publications: [
      {
        authors:
          'D. M. Nikolaev, V. N. Mironov, E. M. Metelkina, A. A. Shtyrov, A. S. Mereshchenko, N. A. Demidov, S. Yu. Vyazmin, T. B. Tennikova, S. E. Moskalenko, S. A. Bondarev, G. A. Zhouravleva, A. V. Vasin, M. S. Panov, M. N. Ryazantsev (2024).',
        name: 'Rational Design of Far-Red Archaerhodopsin-3-Based Fluorescent Genetically Encoded Voltage Indicators: from Elucidation of the Fluorescence Mechanism in Archers to Novel Red-Shifted Variants. ACS Phys. Chem Au 2024',
        addition: 'DOI: 10.1021/acsphyschemau.3c00073',
        link: 'https://doi.org/10.1002/chem.202300540',
      },
    ],
  },
  {
    year: 2023,
    publications: [
      {
        authors:
          'Vidyakina, A. A., Shtyrov, A. A., Ryazantsev, M. N., Khlebnikov, A. F., Kolesnikov, I. E., Sharoyko, V. V., Danilkina, N. A. (2023).',
        name: 'DEVELOPMENT OF FLUORESCENT ISOCOUMARIN‐FUSED OXACYCLONONYNE–1, 2, 3‐TRIAZOLE PAIRS. CHEMISTRY–A EUROPEAN JOURNAL, 29(47), E202300540.',
        addition: 'https://doi.org/10.1002/chem.202300540 (IF 5.02, Q1)',
        link: 'https://doi.org/10.1002/chem.202300540',
      },
      {
        authors:
          'Nosov, V. G., Betina, A. A., Bulatova, T. S., Guseva, P. B., Kolesnikov, I. E., Orlov, S. N., Panov M.S., Ryazantsev M.N., Bogachev N. A., Scripkin M. Yu., Mereshchenko, A. S. (2023).',
        name: 'EFFECT OF GD3+, LA3+, LU3+ CO-DOPING ON THE MORPHOLOGY AND LUMINESCENT PROPERTIES OF NAYF4: SM3+ PHOSPHORS.MATERIALS, 16(6), 2157.',
        addition: 'https://doi.org/10.3390/ma16062157 (IF 3.8, Q2)',
        link: 'https://doi.org/10.3390/ma16062157',
      },
      {
        authors:
          'Nosov, V. G., Toikka, Y. N., Petrova, A. S., Butorlin, O. S., Kolesnikov, I. E., Orlov, S. N., Ryazantsev M.N., Kolesnik S.S., Bogachev N. A., Scripkin M. Yu., Mereshchenko, A. S. (2023).',
        name: 'BRIGHTLY LUMINESCENT (TBXLU1− X) 2BDC3· NH2O MOFS: EFFECT OF SYNTHESIS CONDITIONS ON STRUCTURE AND LUMINESCENT PROPERTIES. MOLECULES, 28(5), 2378.',
        addition: 'DOI: 10.3390/molecules28052378 (IF 4.927, Q1)',
        link: 'https://doi.org/10.3390/molecules28052378',
      },
      {
        authors:
          'Perera, S. M., Erly, A., Makara, A., Nikolaev, D. M., Ryazantsev, M. N., Struts, A. V., & Brown, M. F. (2023).',
        name: 'ELECTRONIC STRUCTURE CALCULATIONS AND DEUTERIUM NMR SPECTROSCOPY REVEAL RETINAL MOBILITY IN RHODOPSIN ACTIVATION. BIOPHYSICAL JOURNAL, 122(3), 195A.',
        addition: 'DOI: 10.1016/j.bpj.2022.11.1189 (IF: 4.033, Q1).',
        link: 'https://doi.org/10.1016/j.bpj.2022.11.1189',
      },
      {
        authors:
          'Erly, A. M., Gerber, B. I., Li, R. J., Doole, F. T., Nikolaev, D. M., Ryazantsev, M. N., ... & Brown, M. F. (2023).',
        name: 'FOR EVERY RETINYLIDENE A FORCE FIELD: USING MACHINE LEARNING TO IMPROVE MOLECULAR SIMULATIONS OF RHODOPSINS. BIOPHYSICAL JOURNAL, 122(3), 199A.',
        addition: 'DOI: 10.1016/j.bpj.2022.11.1209 (IF: 4.033, Q1).',
        link: 'https://doi.org/10.1016/j.bpj.2022.11.1209',
      },
      {
        authors:
          'Nikolaev, D. M., Mironov, V. N., Shtyrov, A. A., Kvashnin, I. D., Mereshchenko, A. S., Vasin, A. V., Panov M.S. & Ryazantsev, M. N. (2023).',
        name: 'FLUORESCENCE IMAGING OF CELL MEMBRANE POTENTIAL: FROM RELATIVE CHANGES TO ABSOLUTE VALUES. INTERNATIONAL JOURNAL OF MOLECULAR SCIENCES, 24(3), 2435.',
        addition: 'DOI: 10.3390/ijms24032435 (IF 6.208, Q1)',
        link: 'https://doi.org/10.3390/ijms24032435',
      },
    ],
  },
  {
    year: 2022,
    publications: [
      {
        authors: 'Nikolaev, M.V., Strashkov, D.M., Ryazantsev, M.N. and Tikhonov, D.B., 2022.',
        name: 'DEVELOPMENT OF A QUATERNARY AMMONIUM PHOTOSWITCHABLE ANTAGONIST OF NMDA RECEPTORS. EUROPEAN JOURNAL OF PHARMACOLOGY, 938, P.175448.',
        addition: 'DOI: 10.1016/j.ejphar.2022.175448 (IF 4.432, Q1)',
        link: 'https://doi.org/10.1016/j.ejphar.2022.175448',
      },
      {
        authors:
          'Panov, M.S., Zakharov, A.P., Khairullina, E.M., Tumkin, I.I., Mereshchenko, A.S., Nikolaev, D.M., Vasin, A.V. and Ryazantsev, M.N., 2022.',
        name: 'AU–RU COMPOSITE FOR ENZYME-FREE EPINEPHRINE SENSING. CHEMOSENSORS, 10(12), P.513.',
        addition: 'DOI: 10.3390/chemosensors10120513 (IF 3.398, Q2)',
        link: 'https://doi.org/10.3390/chemosensors10120513',
      },
      {
        authors: 'Lavit, K., Sapegin, A., Linnik, S., Ryazantsev, M. and Krasavin, M., Steric',
        name: 'PUSH TOWARDS THE [N+ 3] HYDRATED IMIDAZOLINE RING EXPANSION (HIRE) OF DIBENZO [1.4] OXAZEPINES AND THIAZEPINES. EUROPEAN JOURNAL OF ORGANIC CHEMISTRY. 2022(35), P. E202200818',
        addition: 'DOI: 10.1002/ejoc.202200818 (IF 3.021, Q2)',
        link: 'https://doi.org/10.1002/ejoc.202200818',
      },
      {
        authors:
          'Nosov, V.G., Kupryakov, A.S., Kolesnikov, I.E., Vidyakina, A.A., Tumkin, I.I., Kolesnik, S.S., Ryazantsev, M.N., Bogachev, N.A., Skripkin, M.Y. and Mereshchenko, A.S., 2022.',
        name: 'HETEROMETALLIC EUROPIUM (III)–LUTETIUM (III) TEREPHTHALATES AS BRIGHT LUMINESCENT ANTENNA MOFS. MOLECULES, 27(18), P.5763.',
        addition: 'DOI:10.3390/molecules27185763 (IF 4.927, Q1)',
        link: 'https://doi.org/10.3390/molecules27185763',
      },
      {
        authors:
          'Bogachev, N.A., Betina, A.A., Bulatova, T.S., Nosov, V.G., Kolesnik, S.S., Tumkin, I.I., Ryazantsev, M.N., Skripkin, M.Y. and Mereshchenko, A.S., 2022.',
        name: 'LANTHANIDE-ION-DOPING EFFECT ON THE MORPHOLOGY AND THE STRUCTURE OF NAYF4: LN3+ NANOPARTICLES. NANOMATERIALS, 12(17), P.2972.',
        addition: 'DOI:10.3390/nano12172972 (IF 5.076, Q1)',
        link: 'https://doi.org/10.3390/nano12172972',
      },
      {
        authors:
          'Stupin, D.D., Abelit, A.A., Mereshchenko, A.S., Panov, M.S. and Ryazantsev, M.N., 2022.',
        name: 'COPPER–RUTHENIUM COMPOSITE AS PERSPECTIVE MATERIAL FOR BIOELECTRODES: LASER-ASSISTED SYNTHESIS, BIOCOMPATIBILITY STUDY, AND AN IMPEDANCE-BASED CELLULAR BIOSENSOR AS PROOF OF CONCEPT. BIOSENSORS, 12(7), P.527.',
        addition: 'DOI:10.3390/bios12070527 (IF 5.743)',
        link: 'https://doi.org/10.3390/bios12070527',
      },
      {
        authors:
          'Kochemirovskaia S.V., Myunda L.A., Ershova K.O., Mokhorova D.A., Baranova T.A., Ryazantsev M.N., Kochemirovsky V.A., 2022.',
        name: 'STRUCTURE OF BIMETALLIC TARTRATE COMPLEXES FOR THE RAPID FORMATION OF NEW NON-ENZYMATIC BIMETALLIC SENSORS OF GLUCOSE AND HYDROGEN PEROXIDE IN AQUEOUS SOLUTIONS USING LASER SYNTHESIS. MATERIALS LETTERS, V. 306, P. 130973.',
        addition: 'DOI: 10.1016/j.matlet.2021.130973. (IF: 3.423, Q1)',
      },
    ],
  },
  {
    year: 2021,
    publications: [
      {
        authors:
          'Danilkina N. A., Govdi A. I., Khlebnikov A. F., Tikhomirov A. O., Sharoyko V. V., Shtyrov A. A., Ryazantsev M. N., Bräse S., Balova I. A., 2021.',
        name: 'HETEROCYCLOALKYNES FUSED TO A HETEROCYCLIC CORE: SEARCHING FOR AN ISLAND WITH OPTIMAL STABILITY-REACTIVITY BALANCE. JOURNAL OF THE AMERICAN CHEMICAL SOCIETY, 143, 40, PP. 16519–16537.',
        addition: 'DOI: 10.1021/jacs.1c06041. (IF: 15.419, Q1).',
      },
      {
        authors:
          'Kolesnik S. S., Nosov V. G., Kolesnikov I. E., Khairullina E. M. , Tumkin I. I., Vidyakina A. A., Sysoeva A. A., Ryazantsev M. N., Panov M. S., Khripun V. D., Bogachev N. A., Skripkin M. Y., Mereshchenko A. S., 2021.',
        name: 'ULTRASOUND-ASSISTED SYNTHESIS OF LUMINESCENT MICRO- AND NANOCRYSTALLINE EU-BASED MOFS AS LUMINESCENT PROBES FOR HEAVY METAL IONS. NANOMATERIALS (BASEL), 11(9), P. 2448.',
        addition: 'DOI: 10.3390/nano11092448. (IF: 5.076, Q1).',
      },
      {
        authors: 'Nikolaev M. V., Strashkov D. M., Ryazantsev M. N., Tikhonov D. B., 2021.',
        name: 'OPTICAL CONTROL OF N-METHYL-D-ASPARTATE RECEPTORS BY AZOBENZENE QUATERNARY AMMONIUM COMPOUNDS. ACS CHEMICAL NEUROSCIENCE, 12, 18, PP. 3347–3357.',
        addition: 'DOI: 10.1021/acschemneuro.1c00310. (IF: 4.418, Q1).',
      },
      {
        authors:
          'Nikolaev, D. M., Manathunga, M., Orozco-Gonzalez, Y., Shtyrov, A. A., Guerrero Martínez, Y. O., Gozem, S., Ryazantsev M.N., Coutinho K., Canuto S., Olivucci, M., 2021.',
        name: 'FREE ENERGY COMPUTATION FOR AN ISOMERIZING CHROMOPHORE IN A MOLECULAR CAVITY VIA THE AVERAGE SOLVENT ELECTROSTATIC CONFIGURATION MODEL: APPLICATIONS IN RHODOPSIN AND RHODOPSIN-MIMICKING SYSTEMS. JOURNAL OF CHEMICAL THEORY AND COMPUTATION, 17(9), PP. 5885–5895.',
        addition: 'DOI: 10.1021/acs.jctc.1c00221. (IF: 6.006, Q1).',
      },
      {
        authors:
          'Khairullina, E. M., Tumkin, I. I., Stupin, D. D., Smikhovskaia, A. V., Mereshchenko, A. S., Lihachev, A. I., Vasin A. V., Ryazantsev M. N., Panov, M. S., 2021.',
        name: 'LASER-ASSISTED SURFACE MODIFICATION OF NI MICROSTRUCTURES WITH AU AND PT TOWARD CELL BIOCOMPATIBILITY AND HIGH ENZYME-FREE GLUCOSE SENSING. ACS OMEGA, 6(28), PP. 18099–18109.',
        addition: 'DOI: 10.1021/acsomega.1c01880. (IF: 3.512, Q1).',
      },
      {
        authors:
          'Ryazantsev M. N., Strashkov D. M., Nikolaev D. M., Shtyrov A. A., Panov M. S., 2021.',
        name: 'PHOTOPHARMACOLOGICAL COMPOUNDS BASED ON AZOBENZENES AND AZOHETEROARENES: PRINCIPLES OF MOLECULAR DESIGN, MOLECULAR MODELLING, AND SYNTHESIS. RUSS CHEM REV, 90 (7), PP. 868–893.',
        addition: 'DOI: 10.1070/RCR5001. (IF: 6.926, Q1).',
      },
      {
        authors:
          'Khvorost T. A., Beliaev L. Y., Masaoka Y., Hidaka, T., Myasnikova O. S., Ostras A. S. Bogachev N. A., Skripkin M. Yu., Ryazantsev M. N., Tkachenko N., Mereshchenko A. S., 2021.',
        name: 'ULTRAFAST EXCITED-STATE DYNAMICS OF CUBR3– COMPLEX STUDIED WITH SUB-20 FS RESOLUTION. THE JOURNAL OF PHYSICAL CHEMISTRY B, 125(26), PP. 7213–7221.',
        addition: 'DOI: 10.1021/acs.jpcb.1c03797. (IF: 2.991, Q1).',
      },
      {
        authors:
          'Stupin, D. D., Kuzina, E. A., Abelit, A. A., Emelyanov, A. K., Nikolaev, D. M., Ryazantsev, M. N., Koniakhin S. V., Dubina, M. V., 2021.',
        name: 'BIOIMPEDANCE SPECTROSCOPY: BASICS AND APPLICATIONS. ACS BIOMATERIALS SCIENCE & ENGINEERING, 7(6), PP. 1962–1986.',
        addition: 'DOI: 10.1021/acsbiomaterials.0c01570. (IF: 4.749, Q1).',
      },
      {
        authors:
          'Van, N., Doole, F. T., Nikolaev, D., Ryazantsev, M. N., Struts, A., & Brown, M. F., 2021.',
        name: 'QUANTUM MECHANICAL/MOLECULAR MECHANICAL SIMULATIONS MODEL RETINAL DYNAMICS DURING MEMBRANE ACTIVATION OF RHODOPSIN. BIOPHYSICAL JOURNAL, 120(3), P. 304A.',
        addition: 'DOI: 10.1016/j.bpj.2020.11.1937. (IF: 4.033, Q1).',
      },
      {
        authors:
          'Strashkov D. M., Mironov V. N., Nikolaev D. M., Panov M. S., Linnik S. A., Mereshchenko A. S., Kochemirovsky V. A., Vasin A. V., Ryazantsev M. N., 2021.',
        name: 'AZOBENZENE/TETRAETHYL AMMONIUM PHOTOCHROMIC POTASSIUM CHANNEL BLOCKERS: SCOPE AND LIMITATIONS FOR DESIGN OF PARA-SUBSTITUTED DERIVATIVES WITH SPECIFIC ABSORPTION BAND MAXIMA AND THERMAL ISOMERIZATION RATE. INTERNATIONAL JOURNAL OF MOLECULAR SCIENCES, 22(23), P. 13171.',
        addition: 'DOI: 10.3390/ijms222313171. (IF: 5.924, Q1)',
      },
      {
        authors:
          'Shtyrov, A. A., Nikolaev, D. M., Mironov, V. N., Vasin, A. V., Panov, M. S., Tveryanovich, Y. S., & Ryazantsev, M. N., 2021.',
        name: 'SIMPLE MODELS TO STUDY SPECTRAL PROPERTIES OF MICROBIAL AND ANIMAL RHODOPSINS: EVALUATION OF THE ELECTROSTATIC EFFECT OF CHARGED AND POLAR RESIDUES ON THE FIRST ABSORPTION BAND MAXIMA. INTERNATIONAL JOURNAL OF MOLECULAR SCIENCES, 22(6), P. 3029.',
        addition: 'DOI: 10.3390/ijms22063029. (IF: 5.924, Q1)',
      },
    ],
  },
  {
    year: 2020,
    publications: [
      {
        authors:
          'Panov, M.S., Grishankina, A.E., Stupin, D.D., Lihachev, A.I., Mironov, V.N., Strashkov, D.M., Khairullina, E.M., Tumkin, I.I. and Ryazantsev, M.N., 2020.',
        name: 'IN SITU LASER-INDUCED FABRICATION OF A RUTHENIUM-BASED MICROELECTRODE FOR NON-ENZYMATIC DOPAMINE SENSING. MATERIALS, 13(23), P.5385.',
        addition: 'DOI: 10.3390/ma13235385. (IF: 3.057, Q2).',
      },
      {
        authors:
          'Khvorost, T. A., Beliaev, L. Y., Potalueva E., Laptenkova, A. V., Selyutin, A. A., Bogachev, N. A., Skripkin, M. Y., Ryazantsev, M. N., Tkachenko, N., Mereshchenko A. S., 2020.',
        name: 'ULTRAFAST PHOTOCHEMISTRY OF THE [CR(NCS)6]3– COMPLEX IN DIMETHYL SULFOXIDE AND DIMETHYLFORMAMIDE UPON EXCITATION INTO LIGAND-FIELD ELECTRONIC STATE. THE JOURNAL OF PHYSICAL CHEMISTRY B, 124(18), PP. 3724-3733.',
        addition: 'DOI: 10.1021/acs.jpcb.0c00088. (IF: 2.857, Q1).',
      },
      {
        authors:
          'Struts, A. V., Xu, X., Molugu, T. R., Perera, S. M., Faylough, S., Guruge, C., Nascimento, C. L., Ryazantsev, M. N., Brown, M. F., 2020.',
        name: 'ACTIVE RHODOPSIN CHROMOPHORE CONFORMATION REVEALED BY SOLID-STATE 2H NMR AND QM/MM SIMULATIONS. BIOPHYSICAL JOURNAL, 118(3), PP. 362A-363A.',
        addition: 'DOI: 10.1016/j.bpj.2019.11.2085. (IF: 3.665, Q1).',
      },
      {
        authors:
          'Nikolaev, D. M., Shtyrov, A. A., Mereshchenko, A. S., Panov, M. S., Tveryanovich, Y. S., Ryazantsev, M. N., 2020.',
        name: "AN ASSESSMENT OF WATER PLACEMENT ALGORITHMS IN QUANTUM MECHANICS/MOLECULAR MECHANICS MODELING: THE CASE OF RHODOPSINS' FIRST SPECTRAL ABSORPTION BAND MAXIMA. PHYSICAL CHEMISTRY CHEMICAL PHYSICS, 22 (32), PP. 18114-18123.",
        addition: 'DOI: 10.1039/D0CP02638G. (IF: 3.567, Q1).',
      },
      {
        authors:
          'Panov, M. S., Khairullina, E. M., Vshivtcev, F. S., Ryazantsev, M. N., Tumkin, I. I., 2020.',
        name: 'LASER-INDUCED SYNTHESIS OF COMPOSITE MATERIALS BASED ON IRIDIUM, GOLD AND PLATINUM FOR NON-ENZYMATIC GLUCOSE SENSING. MATERIALS, 13 (15), P. 3359.',
        addition: 'DOI: 10.3390/ma13153359. (IF: 3.057, Q2).',
      },
    ],
  },
  {
    year: 2019,
    publications: [
      {
        authors: 'Ryazantsev, M. N., Nikolaev, D. M., Struts, A. V., Brown M. F., 2019.',
        name: 'QUANTUM MECHANICAL AND MOLECULAR MECHANICS MODELING OF MEMBRANE-EMBEDDED RHODOPSINS. THE JOURNAL OF MEMBRANE BIOLOGY, 252(4-5), PP. 425-449.',
        addition: 'DOI: 10.1007/s00232-019-00095-0. (IF: 1.991, Q2).',
      },
      {
        authors:
          'Smikhovskaia, A.V., Andrianov, V.S., Khairullina, E.M., Lebedev, D.V., Ryazantsev, M.N., Panov, M.S. and Tumkin, I.I., 2019.',
        name: 'IN SITU LASER-INDUCED SYNTHESIS OF COPPER-SILVER MICROCOMPOSITE FOR ENZYME-FREE D-GLUCOSE AND L-ALANINE SENSING. APPLIED SURFACE SCIENCE, 488, PP. 531-536.',
        addition: 'DOI: 10.1016/j.apsusc.2019.05.061. (IF: 6.182, Q1).',
      },
      {
        authors:
          'Struts, A.V., Ryazantsev, M.N., Xu, X., Molugu, T.R., Perera, S.M., Guruge, C., Faylough, S., Nascimento, C., Nesnas, N. and Brown, M.F., 2019.',
        name: 'RETINAL FLIPPING DURING RHODOPSIN ACTIVATION REVEALED BY SOLID STATE 2H NMR AND QM/MM SIMULATIONS. BIOPHYSICAL JOURNAL, 116(3), P.204A.',
        addition: 'DOI: 10.1016/j.bpj.2018.11.1128. (IF: 3.665, Q1).',
      },
      {
        authors:
          'Filatov, A.S., Knyazev, N.A., Shmakov, S.V., Bogdanov, A.A., Ryazantsev, M.N., Shtyrov, A.A., Starova, G.L., Molchanov, A.P., Larina, A.G., Boitsov, V.M. and Stepakov, A.V., 2019.',
        name: 'CONCISE SYNTHESIS OF TRYPTANTHRIN SPIRO ANALOGUES WITH IN VITRO ANTITUMOR ACTIVITY BASED ON ONE-POT, THREE-COMPONENT 1, 3-DIPOLAR CYCLOADDITION OF AZOMETHINE YLIDES TO СYCLOPROPENES. SYNTHESIS, 51(03), PP.713-729.',
        addition: 'DOI: 10.1055/s-0037-1611059. (IF: 2.675, Q1).',
      },
      {
        authors:
          'Nikolaev, D.M., Panov, M.S., Shtyrov, A.A., Boitsov, V.M., Vyazmin, S.Y., Chakchir, O.B., Yakovlev, I.P. and Ryazantsev, M.N., 2019.',
        name: 'PERSPECTIVE TOOLS FOR OPTOGENETICS AND PHOTOPHARMACOLOGY: FROM DESIGN TO IMPLEMENTATION. PROGRESS IN PHOTON SCIENCE, PP. 139-172.',
        addition: 'DOI: 10.1007/978-3-030-05974-3_8.',
      },
    ],
  },
  {
    year: 2018,
    publications: [
      {
        authors:
          'Smikhovskaia, A.V., Panov, M.S., Tumkin, I.I., Khairullina, E.M., Ermakov, S.S., Balova, I.A., Ryazantsev, M.N. and Kochemirovsky, V.A., 2018.',
        name: 'IN SITU LASER-INDUCED CODEPOSITION OF COPPER AND DIFFERENT METALS FOR FABRICATION OF MICROCOMPOSITE SENSOR-ACTIVE MATERIALS. ANALYTICA CHIMICA ACTA, 1044, PP.138-146.',
        addition: 'DOI: 10.1016/j.aca.2018.07.042. (IF: 5.997, Q1).',
      },
      {
        authors:
          'Nikolaev, D.M., Shtyrov, A.A., Panov, M.S., Jamal, A., Chakchir, O.B., Kochemirovsky, V.A., Olivucci, M. and Ryazantsev, M.N., 2018.',
        name: 'A COMPARATIVE STUDY OF MODERN HOMOLOGY MODELING ALGORITHMS FOR RHODOPSIN STRUCTURE PREDICTION. ACS OMEGA, 3(7), PP.7555-7566.',
        addition: 'DOI: 10.1021/acsomega.8b00721. (IF: 2.58, Q1).',
      },
      {
        authors:
          'Logunov, L.S., Panov, M.S., Myund, L.A., Tumkin, I.I., Khairullina, E.M., Ryazantsev, M.N., Balova, I.A. and Kochemirovsky, V.A., 2018.',
        name: 'INFLUENCE OF THE LIGAND NATURE ON THE IN SITU LASER-INDUCED SYNTHESIS OF THE ELECTROCATALYTICALLY ACTIVE COPPER MICROSTRUCTURES. ARABIAN JOURNAL OF CHEMISTRY, 11(5), PP.624-634.',
        addition: 'DOI: 10.1016/j.arabjc.2017.11.003. (IF: 3.62, Q2).',
      },
      {
        authors:
          'Rotov, A.Y., Astakhova, L.A., Sitnikova, V.S., Evdokimov, A.A., Boitsov, V.M., Dubina, M.V., Ryazantsev, M.N. and Firsov, M.L., 2018.',
        name: 'NEW EXPERIMENTAL MODELS OF RETINAL DEGENERATION FOR SCREENING MOLECULAR PHOTOCHROMIC ION CHANNEL BLOCKERS. ACTA NATURAE, 10(1), P.75.',
        addition: 'PMID: 29713521; PMCID: PMC5916736. (IF: 2.00, Q3).',
      },
      {
        authors:
          'Filatov, A.S., Knyazev, N.A., Ryazantsev, M.N., Suslonov, V.V., Larina, A.G., Molchanov, A.P., Kostikov, R.R., Boitsov, V.M. and Stepakov, A.V., 2018.',
        name: 'A HIGHLY DIASTEREOSELECTIVE ONE-POT THREE-COMPONENT 1, 3-DIPOLAR CYCLOADDITION OF CYCLOPROPENES WITH AZOMETHINE YLIDES GENERATED FROM 11 H-INDENO [1, 2-B]-QUINOXALIN-11-ONES. ORGANIC CHEMISTRY FRONTIERS, 5(4), PP. 595-605.',
        addition: 'DOI: 10.1039/C7QO00888K. (IF: 5.155, Q1).',
      },
    ],
  },
  {
    year: 2017,
    publications: [
      {
        authors:
          'Panov, M.S., Vereshchagina, O.A., Ermakov, S.S., Tumkin, I.I., Khairullina, E.M., Skripkin, M.Y., Mereshchenko, A.S., Ryazantsev, M.N. and Kochemirovsky, V.A., 2017.',
        name: 'NON-ENZYMATIC SENSORS BASED ON IN SITU LASER-INDUCED SYNTHESIS OF COPPER-GOLD AND GOLD NANO-SIZED MICROSTRUCTURES. TALANTA, 167, PP. 201-207.',
        addition: 'DOI: 10.1016/j.talanta.2017.01.089. (IF: 4.244, Q1).',
      },
      {
        authors:
          'Nikolaev, D.M., Emelyanov, A., Boitsov, V.M., Panov, M.S. and Ryazantsev, M.N., 2017.',
        name: 'A VOLTAGE-DEPENDENT FLUORESCENT INDICATOR FOR OPTOGENETIC APPLICATIONS, ARCHAERHODOPSIN-3: STRUCTURE AND OPTICAL PROPERTIES FROM IN SILICO MODELING. F1000RESEARCH, 6.',
        addition: 'DOI: 10.12688/f1000research.10541.1. (Q1).',
      },
    ],
  },
  {
    year: 2016,
    publications: [
      {
        authors:
          'Ledovskaya, M.S., Molchanov, A.P., Kostikov, R.R., Panikorovsky, T.L., Gurzhiy, V.V., Ryazantsev, M.N., Boitsov, V.M. and Stepakov, A.V., 2016.',
        name: 'ANTHRACENE-FUSED ISOXAZOLOPYRROLO [2, 1-A] ISOQUINOLINES VIA AN ENDOCYCLIC N-ACYLIMINIUM ION CYCLIZATION: A JOINT EXPERIMENTAL AND THEORETICAL STUDY. TETRAHEDRON, 72(32), PP. 4827-4834.',
        addition: 'DOI: 10.1016/j.tet.2016.06.048. (IF: 2.651, Q2).',
      },
    ],
  },
  {
    year: 2015,
    publications: [
      {
        authors: 'Ryazantsev, M.N., Jamal, A., Maeda, S. and Morokuma, K., 2015.',
        name: 'GLOBAL INVESTIGATION OF POTENTIAL ENERGY SURFACES FOR THE PYROLYSIS OF C1–C3 HYDROCARBONS: TOWARD THE DEVELOPMENT OF DETAILED KINETIC MODELS FROM FIRST PRINCIPLES. PHYSICAL CHEMISTRY CHEMICAL PHYSICS, 17(41), PP. 27789-27805.',
        addition: 'DOI: 10.1039/c5cp04329h. (IF: 4.449, Q1).',
      },
      {
        authors:
          'Muzangwa, L.G., Yang, T., Parker, D.S., Kaiser, R.I., Mebel, A.M., Jamal, A., Ryazantsev, M. and Morokuma, K., 2015.',
        name: 'A CROSSED MOLECULAR BEAM AND AB INITIO STUDY ON THE FORMATION OF 5-AND 6-METHYL-1, 4-DIHYDRONAPHTHALENE (C11H12) VIA THE REACTION OF META-TOLYL (C7H7) WITH 1, 3-BUTADIENE (C4H6). PHYSICAL CHEMISTRY CHEMICAL PHYSICS, 17(12), PP. 7699-7706.',
        addition: 'DOI: 10.1039/c5cp00311c. (IF: 4.449, Q1).',
      },
    ],
  },
  {
    year: 2014,
    publications: [
      {
        authors:
          'Parker, D.S., Dangi, B.B., Kaiser, R.I., Jamal, A., Ryazantsev, M. and Morokuma, K., 2014.',
        name: 'FORMATION OF 6-METHYL-1, 4-DIHYDRONAPHTHALENE IN THE REACTION OF THE P-TOLYL RADICAL WITH 1, 3-BUTADIENE UNDER SINGLE-COLLISION CONDITIONS. THE JOURNAL OF PHYSICAL CHEMISTRY A, 118(51), PP.12111-12119.',
        addition: 'DOI:10.1021/jp509990u. (IF: 1.148, Q1).',
      },
      {
        authors:
          'Parker, D.S., Dangi, B.B., Kaiser, R.I., Jamal, A., Ryazantsev, M.N., Morokuma, K., Korte, A. and Sander, W., 2014.',
        name: 'AN EXPERIMENTAL AND THEORETICAL STUDY ON THE FORMATION OF 2-METHYLNAPHTHALENE (C11H10/C11H3D7) IN THE REACTIONS OF THE PARA-TOLYL (C7H7) AND PARA-TOLYL-D7 (C7D7) WITH VINYLACETYLENE (C4H4). THE JOURNAL OF PHYSICAL CHEMISTRY A, 118(15), PP.2709-2718.',
        addition: 'DOI: 10.1021/jp501210d. (SJR: 1.148, Q1).',
      },
    ],
  },
  {
    year: 2013,
    publications: [
      {
        authors:
          'Panov, M.S., Voskresenska, V.D., Ryazantsev, M.N., Tarnovsky, A.N. and Wilson, R.M., 2013.',
        name: '5-AZIDO-2-AMINOPYRIDINE, A NEW NITRENE/NITRENIUM ION PHOTOAFFINITY LABELING AGENT THAT EXHIBITS REVERSIBLE INTERSYSTEM CROSSING BETWEEN SINGLET AND TRIPLET NITRENES. JOURNAL OF THE AMERICAN CHEMICAL SOCIETY, 135(51), PP.19167-19179.',
        addition: 'DOI:10.1021/jp509990u. (IF: 1.148, Q1).',
      },
      {
        authors:
          'Tarnovsky, A. N., Zheldakov, I. L., El-Khoury, P. Z., Pal, S. K., Mereshchenko, A. S., Ryazantsev, M. N., Butaeva, E. V., Pascher, T., Uhlig, J., Milne, C. J., Johnson, S. L., 2013.',
        name: 'SHORT-TIME EVENTS, COHERENCE, AND STRUCTURAL DYNAMICS IN PHOTOCHEMISTRY OF AQUEOUS HALOGENATED TRANSITION METAL DIANIONS. EPJ WEB OF CONFERENCES, 41, P. 05038.',
        addition: 'DOI: 10.1051/epjconf/20134105038. (SJR: 0.166).',
      },
    ],
  },
  {
    year: 2012,
    publications: [
      {
        authors: 'Ryazantsev, M.N., Altun, A. and Morokuma, K., 2012.',
        name: 'COLOR TUNING IN RHODOPSINS: THE ORIGIN OF THE SPECTRAL SHIFT BETWEEN THE CHLORIDE-BOUND AND ANION-FREE FORMS OF HALORHODOPSIN. JOURNAL OF THE AMERICAN CHEMICAL SOCIETY, 134(12), PP. 5520-5523.',
        addition: 'DOI: 10.1021/ja3009117. (IF: 14.357, Q1).',
      },
    ],
  },
  {
    year: 2011,
    publications: [
      {
        authors:
          'Schapiro, I., Ryazantsev, M.N., Frutos, L.M., Ferré, N., Lindh, R. and Olivucci, M., 2011.',
        name: 'THE ULTRAFAST PHOTOISOMERIZATIONS OF RHODOPSIN AND BATHORHODOPSIN ARE MODULATED BY BOND LENGTH ALTERNATION AND HOOP DRIVEN ELECTRONIC EFFECTS. JOURNAL OF THE AMERICAN CHEMICAL SOCIETY, 133(10), PP. 3354-3364.',
        addition: 'DOI: 10.1021/ja1056196. (IF: 14.357, Q1).',
      },
      {
        authors: 'Zheldakov, I.L., N. Ryazantsev, M. and Tarnovsky, A.N., 2011.',
        name: 'THE WAVEPACKET MOTION VIA A CONICAL INTERSECTION IN THE PHOTOCHEMISTRY OF AQUEOUS TRANSITION-METAL DIANIONS. THE JOURNAL OF PHYSICAL CHEMISTRY LETTERS, 2(13), PP. 1540-1545.',
        addition: 'DOI: 10.1021/jz200239b. (IF: 6.496, Q1).',
      },
    ],
  },
  {
    year: 2010,
    publications: [
      {
        authors:
          'Melloni, A., Rossi Paccani, R., Donati, D., Zanirato, V., Sinicropi, A., Parisi, M.L., Martin, E., Ryazantsev, M., Ding, W.J., Frutos, L.M. and Basosi, R., 2010.',
        name: 'MODELING, PREPARATION, AND CHARACTERIZATION OF A DIPOLE MOMENT SWITCH DRIVEN BY Z/E PHOTOISOMERIZATION. JOURNAL OF THE AMERICAN CHEMICAL SOCIETY, 132(27), PP. 9310-9319.',
        addition: 'DOI: 10.1021/ja906733q. (IF: 10.561, Q1).',
      },
      {
        authors:
          'Schapiro, I., Ryazantsev, M.N., Ding, W.J., Huntress, M.M., Melaccio, F., Andruniow, T. and Olivucci, M., 2010.',
        name: 'COMPUTATIONAL PHOTOBIOLOGY AND BEYOND. AUSTRALIAN JOURNAL OF CHEMISTRY, 63(3), PP. 413-429.',
        addition: 'DOI:10.1071/CH09563. (IF: 1.822, Q1).',
      },
    ],
  },
  {
    year: 2009,
    publications: [
      {
        authors:
          'El-Khoury, P.Z., Tarnovsky, A.N., Schapiro, I., Ryazantsev, M.N. and Olivucci, M., 2009.',
        name: 'STRUCTURE OF THE PHOTOCHEMICAL REACTION PATH POPULATED VIA PROMOTION OF CF2I2 INTO ITS FIRST EXCITED STATE. THE JOURNAL OF PHYSICAL CHEMISTRY A, 113(40), PP.',
        addition: 'DOI: 10767-10771. 10.1021/jp902873h. (IF: 2.928, Q1).',
      },
      {
        authors: 'Sumita, M., Ryazantsev, M.N. and Saito, K., 2009.',
        name: 'ACCELERATION OF THE Z TO E PHOTOISOMERIZATION OF PENTA-2, 4-DIENIMINIUM BY HYDROGEN OUT-OF-PLANE MOTION: THEORETICAL STUDY ON A MODEL SYSTEM OF RETINAL PROTONATED SCHIFF BASE. PHYSICAL CHEMISTRY CHEMICAL PHYSICS, 11(30), PP. 6406-6414.',
        addition: 'DOI: 10.1039/B900882A. (IF: 4.121, Q1).',
      },
    ],
  },
  {
    year: 2008,
    publications: [
      {
        authors:
          'Sinicropi, A., Martin, E., Ryazantsev, M., Helbing, J., Briand, J., Sharma, D., Léonard, J., Haacke, S., Cannizzo, A., Chergui, M. and Zanirato, V., 2008.',
        name: 'AN ARTIFICIAL MOLECULAR SWITCH THAT MIMICS THE VISUAL PIGMENT AND COMPLETES ITS PHOTOCYCLE IN PICOSECONDS. PROCEEDINGS OF THE NATIONAL ACADEMY OF SCIENCES, PP.PNAS-080237610.',
        addition: 'DOI: 10.1073/pnas.0802376105. (IF: 9.661, Q1).',
      },
      {
        authors: 'Bulanin, K.M., Bulychev, V.P. and Ryazantsev, M.N., 2008.',
        name: 'THEORETICAL STUDY OF STRUCTURAL AND ENERGY PARAMETERS OF THE VAN DER WAALS COMPLEX OF THE LI+ CATION WITH THE N2 MOLECULE. OPTICS AND SPECTROSCOPY, 105(6), PP.829-837.',
        addition: 'DOI:10.1134/s0030400x08120047. (IF: 0.22, Q4).',
      },
    ],
  },
];
