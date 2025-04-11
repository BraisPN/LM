<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="3.0">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
                <style>
                        html, body {
                        width: 100%;
                        height: 100%;
                        padding: 0%;
                        margin: 0%;
                        }
                        section p{
                        color: red;
                        }
                        
                </style>
            </head>
            <body>
                <h1>Number of records: <xsl:value-of select="count(//record[date/year = '1790' and city = 'Glasgow'])"/></h1>
                <xsl:apply-templates select="/root/record"/>
             </body>

        </html>    
    </xsl:template>

    <xsl:template match="record">
        <xsl:if test="date/year = '1790' and city = 'Glasgow'">
            <section>
            <p>[<xsl:value-of select="id"/>]</p>
        </section>
        <p><xsl:value-of select="city"/></p>
        <p><xsl:value-of select="text/p[position()=1]"/></p>

        </xsl:if>
        
    </xsl:template>
    

</xsl:stylesheet>