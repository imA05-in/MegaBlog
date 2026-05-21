import conf from "../conf/conf.js";
import {Client, Account, ID} from "appwrite"

export class AuthService{
    Client = new Client();
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteEndpoint)
        .setProject(conf.appwriteProjectId)
    this.account = new Account(this.Client);
    }

    async createAccount({email, password, name}){
        // console.log("create");
        try{
            const userAccount = await this.account.create({userId: ID.unique(), email, password, name})

            if(userAccount){
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        }
        catch(err){
            throw err;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
    
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null;
    }

    

}

const authService = new AuthService();
export default authService