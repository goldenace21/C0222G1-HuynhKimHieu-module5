import {Home} from "./home";

export interface Ticket {
  id?: number;
  startPlace?: string;
  endPlace?: string;
  dateStart?: string;
  timeStart?: string;
  quantity?: number;
  price?: string;
  home?: Home;
}
