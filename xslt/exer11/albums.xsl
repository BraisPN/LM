<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="3.0">
    
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Document</title>
                <style>
                    html, body {
                        width: 100%;
                        height: 100%;
                        padding: 0%;
                        margin: 0%;
                    }
                    section {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        color: brown;
                    }
                    article {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 10px;
                        width: 300px;
                        background-color: brown;
                        color: #FFF;
                        border-radius: 10px;
                        text-align: center;
                    }
                    img {
                        width: 250px;
                    }
                </style>
            </head>
            <body>
                <section>
                    <h1>Albums</h1>
                    <xsl:apply-templates select="albums/album"/>
                </section>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="album">
        <article>
            <h3><xsl:value-of select="title"/></h3>
            <img>
                <xsl:attribute name="src">
                    <xsl:value-of select="url"/>
                </xsl:attribute>
            </img>
        </article>
    </xsl:template>

</xsl:stylesheet>
