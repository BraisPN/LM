<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="3.0">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/catalog">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <title>Catalog</title>
            </head>
            <body>
                <ol>
                    <xsl:apply-templates select="book[authors/author/@birthDate &lt; 1970]"/>
                </ol>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="book">
            <li>
                <xsl:value-of select="title"/>
            </li>
    </xsl:template>

</xsl:stylesheet>
