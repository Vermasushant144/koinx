import { Module } from 'node:module';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.coingecko.com'], // Add allowed image domains here
    },
  };
  
  Module.exports = nextConfig;
  