import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import "../styles/OpenAPIschema.css"

const OpenAPIschema = () => {
    return (
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    );
};

export default OpenAPIschema;