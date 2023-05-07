import { 
  CreateProjectRequest,
  CreateProjectResponse,
  NetworkEnum,
  } from '@underdog-protocol/types'
  
  import axios , {type AxiosError } from 'axios'
  
  const API_URL_V1 = 'https://api.underdogprotocol.com/v1'
  const API_URL_V2 = 'https://api.underdogprotocol.com/v2'
  const API_URL_DEV_V1 = 'https://dev.underdogprotocol.com/v1'
  const API_URL_DEV_V2 = 'https://dev.underdogprotocol.com/v2'
  
  export class UnderdogClient {
  
    private apiKey: string
  
    public readonly apiUrlV1: string
    public readonly apiUrlV2: string
  
    public readonly network: NetworkEnum
  
    constructor(apiKey: string, network: NetworkEnum) {
      this.apiKey = apiKey
      this.network = network
  
      if (network === NetworkEnum.Mainnet) {
        this.apiUrlV1 = API_URL_V1
        this.apiUrlV2 = API_URL_V2
      } else {
        this.apiUrlV1 = API_URL_DEV_V1
        this.apiUrlV2 = API_URL_DEV_V2
      }
    }
  
    
  
  }
  
  const client = new UnderdogClient('b22eba7bfffc46.0b0ea8e9bfe348cb8585e504cfe92e7e  ', NetworkEnum.Devnet)
  
