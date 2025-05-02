<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="3.0">

    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Books</title>
        </head>

        <body>
            <ol>
                   <xsl:apply-templates select="books/book"/> 
            </ol> 
        </body>
        </html>
    </xsl:template>

    <xsl:template match="book">
        <xsl:if test="price &gt; 10">
            <xsl:element name="li">
                Title: <xsl:value-of select="title"/>
                Author: <xsl:value-of select="author"/>
                Price: <xsl:value-of select="price"/>
            </xsl:element>
        </xsl:if>
        
    </xsl:template>

</xsl:stylesheet>