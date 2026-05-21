import conf from "../conf/conf"
import {Client, ID, Storage, Query, TablesDB,} from "appwrite"

export class Service{

    client = new Client(); 
    databases; 
    storage;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteEndpoint)
        .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title, 
                    content, 
                    featuredImage,
                    status,
                    userId,
                }
                
            })
        } catch (error) {
            console.log("appwrite/config.js :: createPost:: error: ", error);
            
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data:{
                    title,
                    content, 
                    featuredImage,
                    status,
                }
            })
        } catch (error) {
            console.log("appwrite/config.js :: updatePost :: error: ", error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            })
            return true
            
        } catch (error) {
            console.log("appwrite :: deltePost :: error: ", error);
            
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
        } catch (error) {
            throw error
            return false
        }
    }

    async   getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listRows({
                databaseId : conf.appwriteDatabaseId,
                tableId : conf.appwriteCollectionId,
                queries: Query,
            })
        } catch (error) {
            throw error
            return false
        }
    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.storage.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file,
            })
        } catch (error) {
            console.log("appwrite/config.js :: uploadFile :: error: ",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile({
                bucketId : conf.appwriteBucketId,
                fileId,
            })
        } catch (error) {
            throw error
            return false
        }
    }

    getFilePreview(fileId){
        return  this.storage.getFileView({
            bucketId: conf.appwriteBucketId,
            fileId: fileId,
        })
    }

}

const service = new Service()
export default service