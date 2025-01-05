import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const storeFilePath = path.join(__dirname, 'store.json');

const loadStore = () => {
  if (fs.existsSync(storeFilePath)) {
    const data = fs.readFileSync(storeFilePath, 'utf-8');
    return JSON.parse(data);
  }
  return {};
};

const store: { [key: string]: string } = loadStore();

const saveStore = () => {
  fs.writeFileSync(storeFilePath, JSON.stringify(store, null, 2));
};

export const setKeyValue = (req: Request, res: Response) => {
  const { key, value } = req.body;
  store[key] = value;
  saveStore();
  res.status(200).send({ message: 'Key-Value pair stored successfully.' });
};

export const deleteKeyValue = (req: Request, res: Response) => {
  const { key } = req.params;
  delete store[key];
  saveStore();
  res.status(200).send({ message: 'Key-Value pair deleted successfully.' });
};

export const getValue = (req: Request, res: Response) => {
  const { key } = req.params;
  const value = store[key];
  if (value) {
    res.status(200).send({ key, value });
  } else {
    res.status(404).send({ message: 'Key not found.' });
  }
};

export const getAllKeyValues = (req: Request, res: Response) => {
  res.status(200).send(store);
};

export const deleteAllKeyValues = (req: Request, res: Response) => {
  for (const key in store) {
    delete store[key];
    saveStore();
  }
  res.status(200).send({ message: 'All key-value pairs deleted successfully.' });
};

export const addRandomKeyValues = (req: Request, res: Response) => {
  const { count } = req.body;
  for (let i = 0; i < count; i++) {
    const key = `key${Math.random().toString(36).substring(7)}`;
    const value = `value${Math.random().toString(36).substring(7)}`;
    store[key] = value;
  }
  saveStore();
  res.status(200).send({ message: `${count} random key-value pairs added successfully.` });
};