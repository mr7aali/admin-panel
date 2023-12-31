// import { ISpecification } from "@/types/Specification";

interface ISpecification {
    [key: string]: Array<{ fieldName: string; name: string; type: string }>;
}

export const Specification: ISpecification = {
    product: [
        { fieldName: "Name", name: "name", type: "text" },
        { fieldName: "Price", name: "price", type: "text" },
        { fieldName: "Status", name: "status", type: "text" },
        { fieldName: "Product Code", name: "product_code", type: "text" },
        { fieldName: "Brand", name: "brand", type: "text" },
        { fieldName: "Key Features", name: "key_features", type: "text" },
        { fieldName: "Image", name: "image", type: "text" },
        { fieldName: "Warranty", name: "warranty", type: "text" },
    ],
    display: [
        { fieldName: "Size", type: "text", name: "Size" },
        { fieldName: "Type", type: "text", name: "Type" },
        { fieldName: "Resolution", type: "text", name: "Resolution" },
        { fieldName: "Touch Screen", type: "text", name: "Touch_Screen" },
        { fieldName: "Refresh Rate", type: "text", name: "Refresh_Rate" },
        { fieldName: "Features", type: "text", name: "Features" },
    ],
    processor: [
        { fieldName: "Brand", type: "text", name: "Brand" },
        { fieldName: "Model", type: "text", name: "Model" },
        { fieldName: "Generation", type: "text", name: "Generation" },
        { fieldName: "Frequency", type: "text", name: "Frequency" },
        { fieldName: "Core", type: "text", name: "Core" },
        { fieldName: "Thread", type: "text", name: "Thread" },
        { fieldName: "Cpu cache", type: "text", name: "Cpu_cache" },
    ],
    audio: [
        { fieldName: "Speaker", type: "text", name: "Speaker" },
        { fieldName: "Speaker Details", type: "text", name: "Speaker_Details" },
    ],
    connectivity: [
        { fieldName: "Display Port", type: "text", name: "Display_Port" },
        { fieldName: "HDMI", type: "text", name: "HDMI" },
    ],
    power: [
        { fieldName: "Type", type: "text", name: "Type" },
        { fieldName: "Voltage", type: "text", name: "Voltage" },
    ],
    memory: [
        { fieldName: "RAM", type: "text", name: "RAM" },
        { fieldName: "RAM Type", type: "text", name: "RAM_Type" },
        { fieldName: "Removable", type: "text", name: "Removable" },
        { fieldName: "Total Ram Slot", type: "text", name: "Total_Ram_Slot" },
        { fieldName: "Max Ram Capacity", type: "text", name: "Max_Ram_Capacity" },
    ],
    storage: [
        { fieldName: "Storage Type", type: "text", name: "Storage_Type" },
        { fieldName: "Storage Capacity", type: "text", name: "Storage_Capacity" },
        { fieldName: "hdd rpm", type: "text", name: "hdd_rpm" },
        { fieldName: "Extra M2 Slot", type: "text", name: "Extra_M2_Slot" },
    ],
    graphics: [
        { fieldName: "Model", type: "text", name: "Model" },
        { fieldName: "Memory", type: "text", name: "Memory" },
    ],
    keyboard: [
        { fieldName: "Type", type: "text", name: "Type" },
        { fieldName: "Features", type: "text", name: "Features" },
        { fieldName: "Touch Pad", type: "text", name: "Touch_Pad" },
    ],
    camera: [
        { fieldName: "Web Cam", type: "text", name: "Web_Cam" },
        { fieldName: "Speaker", type: "text", name: "Speaker" },
        { fieldName: "Microphone", type: "text", name: "Microphone" },
        { fieldName: "Audio Feature", type: "text", name: "Audio_Feature" },
    ],
    portsSlots: [
        { fieldName: "Optical Drive", type: "text", name: "Optical_Drive" },
        { fieldName: "CardReader", type: "text", name: "CardReader" },
        { fieldName: "VGA", type: "text", name: "VGA" },
        { fieldName: "Display Port", type: "text", name: "Display_Port" },
        { fieldName: "HDMI Port", type: "text", name: "HDMI_Port" },
        { fieldName: "USB 2 Port", type: "text", name: "USB_2_Port" },
        { fieldName: "USB 3 Port", type: "text", name: "USB_3_Port" },
        { fieldName: "USB TypeC", type: "text", name: "USB_TypeC" },
    ],
    security: [
        { fieldName: "Fingerprint Sensor", type: "text", name: "Fingerprint_Sensor" },
        { fieldName: "Security Chip", type: "text", name: "Security_Chip" },
    ],
    physicalSpecification: [
        { fieldName: "Color", type: "text", name: "Color" },
        { fieldName: "Dimensions", type: "text", name: "Dimensions" },
        { fieldName: "Weight", type: "text", name: "Weight" },
        { fieldName: "Body Material", type: "text", name: "Body_Material" },
    ],
    rearCamera: [
        { fieldName: "Resolution", type: "text", name: "Resolution" },
        { fieldName: "Feature", type: "text", name: "Feature" },
        { fieldName: "VideoRecording", type: "text", name: "VideoRecording" },
    ],
    frontCamera: [
        { fieldName: "Resolution", type: "text", name: "Resolution" },
        { fieldName: "Feature", type: "text", name: "Feature" },
        { fieldName: "VideoRecording", type: "text", name: "VideoRecording" },

    ],
    networkConnectivity: [
        { fieldName: "SIM", type: "text", name: "SIM" },
        { fieldName: "Network", type: "text", name: "Network" },
        { fieldName: "Wifi", type: "text", name: "Wifi" },
        { fieldName: "Bluetooth", type: "text", name: "Bluetooth" },
        { fieldName: "Gps", type: "text", name: "Gps" },
        { fieldName: "Nfc", type: "text", name: "Nfc" },
        { fieldName: "USB", type: "text", name: "USB" },
        { fieldName: "otg", type: "text", name: "otg" },
        { fieldName: "Audio Jack", type: "text", name: "Audio_Jack" },
    ],
    os: [
        { fieldName: "Os System", type: "text", name: "Os_System" },
        { fieldName: "Upgradable", type: "text", name: "Upgradable" },
    ],

}

export const formName = [
    "product",
    "display",
    "processor",
    "audio",
    "connectivity",
    "power",
    "memory",
    "storage",
    "graphics",
    "keyboard",
    "camera",
    "portsSlots",
    "security",
    "physicalSpecification",
    "rearCamera",
    "frontCamera",
    "networkConnectivity",
];