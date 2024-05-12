import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (contacts.length === 0) return [];
    return contacts.filter(({ name, number }) => {
      const nameFilter = name
        .toLowerCase()
        .includes(filter.toLowerCase().trim());
      const numberFilter = number.includes(filter.trim());
      return nameFilter || numberFilter;
    });
  }
);
