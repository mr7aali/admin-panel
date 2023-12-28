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
    Display: [
        { fieldName: "Size", type: "text", name: "Size" },
        { fieldName: "Type", type: "text", name: "Type" },
        { fieldName: "Resolution", type: "text", name: "Resolution" },
        { fieldName: "Touch Screen", type: "text", name: "Touch_Screen" },
        { fieldName: "Refresh Rate", type: "text", name: "Refresh_Rate" },
        { fieldName: "Features", type: "text", name: "Features" },
    ],
    Processor: [
        { fieldName: "Brand", type: "text", name: "Brand" },
        { fieldName: "Model", type: "text", name: "Model" },
        { fieldName: "Generation", type: "text", name: "Generation" },
        { fieldName: "Frequency", type: "text", name: "Frequency" },
        { fieldName: "Core", type: "text", name: "Core" },
        { fieldName: "Thread", type: "text", name: "Thread" },
        { fieldName: "Cpu cache", type: "text", name: "Cpu_cache" },
    ],
    Audio: [
        { fieldName: "Speaker", type: "text", name: "Speaker" },
        { fieldName: "Speaker_Details", type: "text", name: "Speaker_Details" },
    ],
    Connectivity: [
        { fieldName: "Display_Port", type: "text", name: "Display_Port" },
        { fieldName: "HDMI", type: "text", name: "HDMI" },
    ],
    Power: [
        { fieldName: "Type", type: "text", name: "Type" },
        { fieldName: "Voltage", type: "text", name: "Voltage" },
    ],
    Memory: [
        { fieldName: "RAM", type: "text", name: "RAM" },
        { fieldName: "RAM_Type", type: "text", name: "RAM_Type" },
        { fieldName: "Removable", type: "text", name: "Removable" },
        { fieldName: "Total_Ram_Slot", type: "text", name: "Total_Ram_Slot" },
        { fieldName: "Max_Ram_Capacity", type: "text", name: "Max_Ram_Capacity" },
    ],
    Storage: [
        { fieldName: "Storage_Type", type: "text", name: "Storage_Type" },
        { fieldName: "Storage_Capacity", type: "text", name: "Storage_Capacity" },
        { fieldName: "hdd_rpm", type: "text", name: "hdd_rpm" },
        { fieldName: "Extra_M2_Slot", type: "text", name: "Extra_M2_Slot" },
    ],
    Graphics: [
        { fieldName: "Model", type: "text", name: "Model" },
        { fieldName: "Memory", type: "text", name: "Memory" },
    ],
    Keyboard: [
        { fieldName: "Type", type: "text", name: "Type" },
        { fieldName: "Features", type: "text", name: "Features" },
        { fieldName: "Touch_Pad", type: "text", name: "Touch_Pad" },
    ],
    Camera: [
        { fieldName: "Web_Cam", type: "text", name: "Web_Cam" },
        { fieldName: "Speaker", type: "text", name: "Speaker" },
        { fieldName: "Microphone", type: "text", name: "Microphone" },
        { fieldName: "Audio_Feature", type: "text", name: "Audio_Feature" },
    ],
    Ports_Slots: [
        { fieldName: "Optical_Drive", type: "text", name: "Optical_Drive" },
        { fieldName: "CardReader", type: "text", name: "CardReader" },
        { fieldName: "VGA", type: "text", name: "VGA" },
        { fieldName: "Display_Port", type: "text", name: "Display_Port" },
        { fieldName: "HDMI_Port", type: "text", name: "HDMI_Port" },
        { fieldName: "USB_2_Port", type: "text", name: "USB_2_Port" },
        { fieldName: "USB_3_Port", type: "text", name: "USB_3_Port" },
        { fieldName: "USB_TypeC", type: "text", name: "USB_TypeC" },
    ],
    Security: [
        { fieldName: "Fingerprint_Sensor", type: "text", name: "Fingerprint_Sensor" },
        { fieldName: "Security_Chip", type: "text", name: "Security_Chip" },
    ],
    Physical_Specification: [
        { fieldName: "Color", type: "text", name: "Color" },
        { fieldName: "Dimensions", type: "text", name: "Dimensions" },
        { fieldName: "Weight", type: "text", name: "Weight" },
        { fieldName: "Body_Material", type: "text", name: "Body_Material" },
    ],
    Rear_Camera: [
        { fieldName: "Resolution", type: "text", name: "Resolution" },
        { fieldName: "Feature", type: "text", name: "Feature" },
        { fieldName: "VideoRecording", type: "text", name: "VideoRecording" },
    ],
    Front_Camera: [
        { fieldName: "Resolution", type: "text", name: "Resolution" },
        { fieldName: "Feature", type: "text", name: "Feature" },
        { fieldName: "VideoRecording", type: "text", name: "VideoRecording" },

    ],
    Network_Connectivity: [
        { fieldName: "SIM", type: "text", name: "SIM" },
        { fieldName: "Network", type: "text", name: "Network" },
        { fieldName: "Wifi", type: "text", name: "Wifi" },
        { fieldName: "Bluetooth", type: "text", name: "Bluetooth" },
        { fieldName: "Gps", type: "text", name: "Gps" },
        { fieldName: "Nfc", type: "text", name: "Nfc" },
        { fieldName: "USB", type: "text", name: "USB" },
        { fieldName: "otg", type: "text", name: "otg" },
        { fieldName: "Audio_Jack", type: "text", name: "Audio_Jack" },
    ],
    Os: [
        { fieldName: "Os_System", type: "text", name: "Os_System" },
        { fieldName: "Upgradable", type: "text", name: "Upgradable" },
    ],

}

export const formName = [
    "product",
    "Display",
    "Processor",
    // "Audio",
    // "Connectivity",
    // "Power",
    // "Memory",
    // "Storage",
    // "Graphics",
    // "Keyboard",
    // "Camera",
    // "Ports_Slots",
    // "Security",
    // "Physical_Specification",
    // "Rear_Camera",
    // "Front_Camera",
    // "Network_Connectivity",
]