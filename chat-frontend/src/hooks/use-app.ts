'use client'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useApp = () => useContext(AppContext);
