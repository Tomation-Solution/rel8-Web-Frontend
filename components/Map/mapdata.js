var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "600", //'700' or 'responsive'
    background_color: "#b50c0c",
    background_transparent: "yes",
    border_color: "#88a4bc",
    
    //State defaults
    state_description: "State description",
    state_color: "#3b729f",
    state_hover_color: "#000000",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: "16",
    label_font: "poppins",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    NGA2839: {
      name: "Borno"
    },
    NGA2841: {
      name: "Abia"
    },
    NGA2842: {
      name: "Akwa Ibom"
    },
    NGA2843: {
      name: "Imo"
    },
    NGA2844: {
      name: "Rivers"
    },
    NGA2845: {
      name: "Bayelsa"
    },
    NGA2846: {
      name: "Benue"
    },
    NGA2847: {
      name: "Cross River"
    },
    NGA2848: {
      name: "Taraba"
    },
    NGA2849: {
      name: "Kwara"
    },
    NGA2850: {
      name: "Lagos"
    },
    NGA2851: {
      name: "Niger"
    },
    NGA2852: {
      name: "Ogun"
    },
    NGA2853: {
      name: "Ondo"
    },
    NGA2854: {
      name: "Ekiti"
    },
    NGA2855: {
      name: "Osun"
    },
    NGA2856: {
      name: "Oyo"
    },
    NGA2857: {
      name: "Anambra"
    },
    NGA2858: {
      name: "Bauchi"
    },
    NGA2859: {
      name: "Gombe"
    },
    NGA2860: {
      name: "Delta"
    },
    NGA2861: {
      name: "Edo"
    },
    NGA2862: {
      name: "Enugu"
    },
    NGA2863: {
      name: "Ebonyi"
    },
    NGA2864: {
      name: "Kaduna"
    },
    NGA2865: {
      name: "Kogi"
    },
    NGA2866: {
      name: "Plateau"
    },
    NGA2867: {
      name: "Nassarawa"
    },
    NGA2868: {
      name: "Jigawa"
    },
    NGA2869: {
      name: "Kano"
    },
    NGA2870: {
      name: "Katsina"
    },
    NGA2871: {
      name: "Sokoto"
    },
    NGA2872: {
      name: "Zamfara"
    },
    NGA2873: {
      name: "Yobe"
    },
    NGA2879: {
      name: "Kebbi"
    },
    NGA2881: {
      name: "Adamawa"
    },
    NGA3470: {
      name: "FCT Abuja"
    }
  },
  locations: {
    "0": {
      lat: "9.083333",
      lng: "7.533333",
      name: "Abuja"
    }
  },
  labels: {
    "0": {
      name: "Rivers",
      x: 351.63699,
      y: 789.5363,
      parent_id: "NGA2844"
    },
    "1": {
      name: "Abuja",
      x: 405.3,
      y: 408.6,
      parent_id: "0"
    },
    "2": {
      name: "Borno",
      parent_id: "NGA2839",
      x: 884.2,
      y: 164.5
    },
    "3": {
      name: "Abia",
      parent_id: "NGA2841",
      x: 408.1,
      y: 696.1
    },
    "4": {
      name: "Akwa Ibom",
      parent_id: "NGA2842",
      x: 429.1,
      y: 763.3
    },
    "5": {
      name: "Imo",
      parent_id: "NGA2843",
      x: 364.5,
      y: 709.2
    },
    "6": {
      name: "Rivers",
      parent_id: "NGA2844",
      x: 334.5,
      y: 746.7
    },
    "7": {
      name: "Bayelsa",
      parent_id: "NGA2845",
      x: 279.5,
      y: 771
    },
    "8": {
      name: "Benue",
      parent_id: "NGA2846",
      x: 545.5,
      y: 561.2
    },
    "9": {
      name: "Cross River",
      parent_id: "NGA2847",
      x: 476.4,
      y: 705.5
    },
    "10": {
      name: "Taraba",
      parent_id: "NGA2848",
      x: 660.3,
      y: 504.9
    },
    "11": {
      name: "Kwara",
      parent_id: "NGA2849",
      x: 181.5,
      y: 448.7
    },
    "12": {
      name: "Lagos",
      parent_id: "NGA2850",
      x: 107.2,
      y: 622.2
    },
    "13": {
      name: "Niger",
      parent_id: "NGA2851",
      x: 241.1,
      y: 346.2
    },
    "14": {
      name: "Ogun",
      parent_id: "NGA2852",
      x: 38.1,
      y: 583.5
    },
    "15": {
      name: "Ondo",
      parent_id: "NGA2853",
      x: 179.6,
      y: 600.1
    },
    "16": {
      name: "Ekiti",
      parent_id: "NGA2854",
      x: 211.2,
      y: 524.6
    },
    "17": {
      name: "Osun",
      parent_id: "NGA2855",
      x: 155.8,
      y: 542.5
    },
    "18": {
      name: "Oyo",
      parent_id: "NGA2856",
      x: 72.9,
      y: 484.9
    },
    "19": {
      name: "Anambra",
      parent_id: "NGA2857",
      x: 358.3,
      y: 658.3
    },
    "20": {
      name: "Bauchi",
      parent_id: "NGA2858",
      x: 580.6,
      y: 296.2
    },
    "21": {
      name: "Gombe",
      parent_id: "NGA2859",
      x: 704.3,
      y: 264.7
    },
    "22": {
      name: "Delta",
      parent_id: "NGA2860",
      x: 277.3,
      y: 713.1
    },
    "23": {
      name: "Edo",
      parent_id: "NGA2861",
      x: 295.3,
      y: 599.6
    },
    "24": {
      name: "Enugu",
      parent_id: "NGA2862",
      x: 394.2,
      y: 625.6
    },
    "25": {
      name: "Ebonyi",
      parent_id: "NGA2863",
      x: 448.1,
      y: 644.6
    },
    "26": {
      name: "Kaduna",
      parent_id: "NGA2864",
      x: 423.8,
      y: 284.1
    },
    "27": {
      name: "Kogi",
      parent_id: "NGA2865",
      x: 383.8,
      y: 538.4
    },
    "28": {
      name: "Plateau",
      parent_id: "NGA2866",
      x: 583.6,
      y: 417.3
    },
    "29": {
      name: "Nassarawa",
      parent_id: "NGA2867",
      x: 443.2,
      y: 458.3
    },
    "30": {
      name: "Jigawa",
      parent_id: "NGA2868",
      x: 575.8,
      y: 134.3
    },
    "31": {
      name: "Kano",
      parent_id: "NGA2869",
      x: 479.5,
      y: 169.3
    },
    "32": {
      name: "Katsina",
      parent_id: "NGA2870",
      x: 408.7,
      y: 104.8
    },
    "33": {
      name: "Sokoto",
      parent_id: "NGA2871",
      x: 228.1,
      y: 60
    },
    "34": {
      name: "Zamfara",
      parent_id: "NGA2872",
      x: 305,
      y: 149.7
    },
    "35": {
      name: "Yobe",
      parent_id: "NGA2873",
      x: 737.2,
      y: 116.5
    },
    "36": {
      name: "Kebbi",
      parent_id: "NGA2879",
      x: 122,
      y: 151.7
    },
    "37": {
      name: "Adamawa",
      parent_id: "NGA2881",
      x: 803.2,
      y: 379.9
    },
    "38": {
      name: "Abuja",
      parent_id: "NGA3470",
      x: 368.8,
      y: 435.1
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};