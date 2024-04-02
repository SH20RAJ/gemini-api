import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\\+/g, ' '));
  }
async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//    !prompt && prompt = "Write a story about a magic backpack."
   console.log(prompt)

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
//   console.log(text);
  return text;
}

export async  function GET(req){
    const { url: rawUrl } = req;
    const prompt = getParameterByName("prompt", rawUrl);
    console.log(prompt);

    
    let text = await run(prompt);
    return new NextResponse(text,{
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
}

