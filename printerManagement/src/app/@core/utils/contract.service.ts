import { Injectable } from "@angular/core";
import { Web3ConnectorService } from "./web3-connector.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import * as truffle from "truffle-contract";

@Injectable()
export class ContractService {
  constructor(
    private web3ConnectorService: Web3ConnectorService,
    private http: HttpClient
  ) {
    const web3 = this.web3ConnectorService.checkAndInstantiateWeb3()
  }

  getContract() {
    return new Promise((resolve, reject) => {
      this.http.get("http://127.0.0.1:8080/api/contract").subscribe(res => {
        resolve(res);
      });
    });
  }

  getInformation(id){
    return new Promise((resolve, reject) => {
    this.getContract().then( contract => {
      let contractInst = truffle(contract);
      contractInst.setProvider(this.web3.currentProvider)
      contractInst.deployed().then( inst => {
        return inst.getData(id, {from: this.web3.eth.accounts[0]}).then(res => { resolve(res) })
      });
      })
    })
  }

  web3 = this.web3ConnectorService.checkAndInstantiateWeb3();
}
