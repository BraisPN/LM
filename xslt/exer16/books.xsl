<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Books Table</title>
        <style>
          table {
            border-collapse: collapse;
            width: 80%;
            margin: 20px auto;
            text-align: left;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
          }
          th {
            background-color: dodgerblue;
            color: white;
          }
          caption {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .low-price {
            background-color: aquamarine;
          }
          .medium-price {
            background-color: gold;
          }
          .high-price {
            background-color: crimson;
            color: white;
          }
        </style>
      </head>
      <body>
        <table>
          <caption>
            <xsl:text>Number of rows: </xsl:text>
            <xsl:value-of select="count(books/book)"/>
          </caption>
          <tr>
            <th>Author</th>
            <th>Title</th>
          </tr>
          <xsl:for-each select="books/book">
            <tr>
              <xsl:attribute name="class">
                <xsl:choose>
                  <xsl:when test="price &lt;= 10">low-price</xsl:when>
                  <xsl:when test="price &gt; 10 and price &lt;= 15">medium-price</xsl:when>
                  <xsl:otherwise>high-price</xsl:otherwise>
                </xsl:choose>
              </xsl:attribute>
              <td><xsl:value-of select="author"/></td>
              <td><xsl:value-of select="title"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
