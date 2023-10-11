export interface ContactProps {
  name: string;
  phoneNum: string;
  address: string;
}

export interface ContactWithCoordinates extends ContactProps {
  coordinates: { lat: number; lng: number };
}

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ContactProps
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  contacts?: ContactProps[];
  setContacts?: (contacts: ContactProps[]) => void;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof ContactProps;
  label: string;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  contacts: ContactProps[];
  setContacts: (contacts: ContactProps[]) => void;
  selected: ContactProps[];
  setSelected: (contacts: ContactProps[]) => void;
}
