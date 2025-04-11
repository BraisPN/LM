<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="3.0">
    
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <title>Customer</title>
            </head>
            <body>
                <ul>
                    <xsl:for-each select="//product">
                        <li>
                            <ul>
                                <li>Name: </li>
                                <li></li>
                            </ul>
                        </li>
                    </xsl:for-each>
                    
                </ul>    
            </body>
        </html>
    </xsl:template>
    
    
    
    
</xsl:stylesheet>