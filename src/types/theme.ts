import React from "react";

export interface Theme {
    name: string;
    style: {
        background: string;
        color: string;
    }
}
export type ThemeContextType =  {
  children: React.ReactNode;
}