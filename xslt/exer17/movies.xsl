<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Movies List</title>
      </head>
      <body>
        <h1>
          <xsl:text>Number of films: </xsl:text>
          <xsl:value-of select="count(Movies/Movie)"/>
        </h1>
        <ul>
          <xsl:for-each select="Movies/Movie">
            <xsl:sort select="Year" data-type="number"/>
            <li>
              <xsl:value-of select="concat(Title, ' - ', Year)"/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
