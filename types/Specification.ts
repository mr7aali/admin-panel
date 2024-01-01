export type ISpecification = {
    product: { fieldName: string, type: string, name: string }[];
    display: { fieldName: string, type: string, name: string }[];
    processor: { fieldName: string, type: string, name: string }[];
    audio: { fieldName: string, type: string, name: string }[];
    connectivity: { fieldName: string, type: string, name: string }[];
    power: { fieldName: string, type: string, name: string }[];
    memory: { fieldName: string, type: string, name: string }[];
    storage: { fieldName: string, type: string, name: string }[];
    graphics: { fieldName: string, type: string, name: string }[];
    keyboard: { fieldName: string, type: string, name: string }[];
    camera: { fieldName: string, type: string, name: string }[];
    portsSlots: { fieldName: string, type: string, name: string }[];
    security: { fieldName: string, type: string, name: string }[];
    physicalSpecification: { fieldName: string, type: string, name: string }[];
    rearCamera: { fieldName: string, type: string, name: string }[];
    frontCamera: { fieldName: string, type: string, name: string }[];
    networkConnectivity: { fieldName: string, type: string, name: string }[];
    os: { fieldName: string, type: string, name: string }[];
}