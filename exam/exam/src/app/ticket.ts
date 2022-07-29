import {Home} from "./home";

export interface Ticket {
  id?: number;
  startPlace?: string;
  endPlace?: string;
  startDate?: string;
  startTime?: string;
  quantity?: number;
  price?: string;
  home?: Home;
}
