import express from "express";
import { login, register } from "../Controller/Logincontroller.js";
import { getcards } from "../Controller/cardscontroller.js";
import { addHtmlTopic, getHtmlTopics } from "../Controller/Htmlcontroller.js";
import { addCssTopics, getCssTopics } from "../Controller/Csscontroller.js";
import { addJavascriptTopics, getJavascriptTopics } from "../Controller/Javascriptcontroller.js";
import { addReactTopics, getReactTopics } from "../Controller/Reactcontroller.js";
import { addTypeScriptTopics, getTypeScriptTopics } from "../Controller/TypescriptController.js";
import { addNodeTopics, getNodeTopics } from "../Controller/Nodejscontroller.js";
import { addExpressTopics, getExpressTopics } from "../Controller/Expresscontroler.js";
import { addMongoTopics, getMongoTopics } from "../Controller/Mongocontroller.js";
import { addSqlTopicsBulk, getSqlTopics } from "../Controller/Sqlcontroller.js";
import { insertGitTopics, getGitTopics } from "../Controller/GitController.js";
import { addBootstrapTopics, getBootstrapTopics } from "../Controller/Bootstrapcontroller.js";
import { addTailwindTopics, getTailwindTopics } from "../Controller/Tailwindcontroller.js";
import { getReduxTopics, insertReduxTopics } from "../Controller/Reduxcontroller.js";
import { addRestApiTopics, getRestApiTopics } from "../Controller/Restcontroller.js";
import { addDsaTopics, getDsaTopics } from "../Controller/Dsacontroller.js";
import { addPythonTopics, getPythonTopics } from "../Controller/Pythoncoontroller.js";
import { addcontent } from "../Controller/Addcontroller.js";









const route = express.Router();


route.post("/register", register);
route.post("/login", login);

route.get("/cards", getcards);
route.post("/addHtmlTopic", addHtmlTopic);
route.get("/getHtmlTopics", getHtmlTopics);
route.post("/addCssTopics", addCssTopics);
route.get("/getCssTopics", getCssTopics);
route.post("/addJavascriptTopics", addJavascriptTopics);
route.get("/getJavascriptTopics", getJavascriptTopics);
route.post("/addReactTopics", addReactTopics);
route.get("/getReactTopics", getReactTopics);
route.post("/addTypeScriptTopics", addTypeScriptTopics);
route.get("/getTypeScriptTopics", getTypeScriptTopics);
route.post("/addNodeTopics", addNodeTopics);
route.get("/getNodeTopics", getNodeTopics);
route.post("/addExpressTopics", addExpressTopics);
route.get("/getExpressTopics", getExpressTopics);
route.post("/addMongoTopics", addMongoTopics);
// Example: GET http://localhost:3000/api/auth/getMongoTopics
route.get("/getMongoTopics", getMongoTopics);
// SQL Topics
route.post("/addSqlTopicsBulk", addSqlTopicsBulk); 
route.get("/getSqlTopics", getSqlTopics);
route.post("/addGitTopics", insertGitTopics);
route.get("/getGitTopics", getGitTopics);
route.post("/addBootstrapTopics", addBootstrapTopics);
route.get("/getBootstrapTopics", getBootstrapTopics);
route.post("/addTailwindTopics", addTailwindTopics);
route.get("/getTailwindTopics", getTailwindTopics);

route.post("/addReduxTopics", insertReduxTopics);
route.get("/getReduxTopics", getReduxTopics);
route.post("/addRestApiTopics", addRestApiTopics);
route.get("/getRestApiTopics", getRestApiTopics);
route.post("/addDsaTopics", addDsaTopics);   
route.get("/getDsaTopics", getDsaTopics);   
route.post("/addPythonTopics", addPythonTopics);
route.get("/getPythonTopics", getPythonTopics); 
route.patch("/topic/addcontent/:name", addcontent);



// http://localhost:3000/addHtmlTopic
export default route;

