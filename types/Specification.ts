export type ISpecification = {
    product: { fieldName: string, type: string, name: string }[];
    Display: { fieldName: string, type: string, name: string }[];
    Processor: { fieldName: string, type: string, name: string }[];
    Audio: { fieldName: string, type: string, name: string }[];
    Connectivity: { fieldName: string, type: string, name: string }[];
    Power: { fieldName: string, type: string, name: string }[];
    Memory: { fieldName: string, type: string, name: string }[];
    Storage: { fieldName: string, type: string, name: string }[];
    Graphics: { fieldName: string, type: string, name: string }[];
    Keyboard: { fieldName: string, type: string, name: string }[];
    Camera: { fieldName: string, type: string, name: string }[];
    Ports_Slots: { fieldName: string, type: string, name: string }[];
    Security: { fieldName: string, type: string, name: string }[];
    Physical_Specification: { fieldName: string, type: string, name: string }[];
    Rear_Camera: { fieldName: string, type: string, name: string }[];
    Front_Camera: { fieldName: string, type: string, name: string }[];
    Network_Connectivity: { fieldName: string, type: string, name: string }[];
    Os: { fieldName: string, type: string, name: string }[];
}