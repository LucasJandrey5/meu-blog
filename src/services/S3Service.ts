import { IndexData } from "@/types";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const REGION = process.env.NEXT_PUBLIC_AWS_REGION!;
const BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!;

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
  },
});

export async function geFileFromS3(key: string): Promise<string | null> {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    console.log(command);
    const response = await s3Client.send(command);

    // Converte o stream em string
    const bodyContents = await response.Body?.transformToString();

    if (!bodyContents) {
      return null;
    }

    return bodyContents;
  } catch (error) {
    console.error("Erro ao obter arquivo do S3", error);
    return null;
  }
}

// Função específica para buscar o index.json
export async function getIndexJson(): Promise<IndexData | null> {
  try {
    const jsonString = await geFileFromS3("index.json");
    if (!jsonString) {
      return null;
    }

    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Erro ao obter index.json do S3", error);
    return null;
  }
}
