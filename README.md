# GoHighLevel SDK for JavaScript

![NPM Version](https://img.shields.io/npm/v/ghl-sdk)
![GitHub License](https://img.shields.io/github/license/adkonghq/ghl-sdk)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/adkonghq/ghl-sdk/master)

## Installation  
```bash  
npm install ghl-sdk  
```
```bash   
yarn add ghl-sdk  
```
```bash  
pnpm add ghl-sdk  
``` 
## Overview
The library is organized into distinct client modules — each responsible for a specific set of API interactions. For example, the ```OauthClient``` handles authentication and token management, while the ```LocationsClient``` encapsulates methods for retrieving location-specific data. Both [type definitions](https://adkonghq.github.io/ghl-sdk/) and retry logic are included. The pagination should be considered separately for each particular method and use case as there is no consistency across different modules of the underlying GHL API.

## Quick Start  
```typescript  
import { OauthClient, LocationsClient } from 'ghl-sdk';  

const client_id = '64720d51b50eb849194247ce-lzdnsr6z';
const client_secret = '5060d220-a031-4f39-9cr0-0424e08ffba5';
const grant_type = 'authorization_code';
const user_type = 'Location';
const code = '86b68a0da12ba59f9a85abf2f5bafde171321bdd';
const locationId = 've9EPM428h8vShlRW1KT';

// Exchange OAuth code for access token
const oauthClient = new OauthClient();
const { access_token } = await oauthClient.getAccessToken({
  client_id,
  client_secret,
  grant_type,
  user_type,
  code,
});

// Fetch location details
const locationsClient = new LocationsClient(accessToken);
const { location } = await locationClient.findById(locationId);  
console.log(location.name);  

// Fetch the available forms for location
const formsClient = new FormsClient(accessToken);
const { forms, total } = await formsClient.find({ locationId, limit: 100 });
console.log(`Fetched ${forms.length} forms out of ${total}`);
```
