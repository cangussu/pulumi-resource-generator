import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";


export const createResources = async () => {
    console.log("aqui2");
    // Create a GCP resource (Storage Bucket)
    const bucket = new gcp.storage.Bucket("my-bucket");

    // Export the DNS name of the bucket
    const bucketName = bucket.url;
}