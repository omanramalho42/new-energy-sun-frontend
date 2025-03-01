export enum ModelPhasic {
  Monofasico = "monofasico",
  Bifasico = "bifasico",
  Trifasico = "trifasico"
}

export enum Framing {
  AX = "AX",
  B1 = "B1",
  B2 = "B2",
  B3 = "B3"
}

export interface IConsumerProps {
  id: string;
  consumptionForaPontaEmKWH: number;
  monthOfConsumption: Date;
  unitId: string;
}

export interface IUnitProps {
  id: string;
  codeOfConsumerUnit: string;
  modelPhasic: ModelPhasic;
  framing: Framing;
  historyOfConsumptionInKWH: IConsumerProps[];
  leadId: string;
}

export interface ILeadProps {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  units: IUnitProps[];
}