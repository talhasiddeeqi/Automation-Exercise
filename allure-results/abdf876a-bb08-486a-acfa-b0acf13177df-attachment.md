# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> Register While Checkout
- Location: tests\Checkout.spec.ts:42:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52]
          - link "APIs list for practice" [ref=e53] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54]
        - img "demo website for practice" [ref=e56]
    - link "" [ref=e57] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link "" [ref=e59] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading "Category" [level=2] [ref=e66]
      - generic [ref=e67]:
        - heading " Women" [level=4] [ref=e70]:
          - link " Women" [ref=e71] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading " Men" [level=4] [ref=e76]:
          - link " Men" [ref=e77] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e82]:
          - link " Kids" [ref=e83] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - generic:
        - insertion:
          - generic:
            - iframe
      - generic [ref=e86]:
        - heading "Brands" [level=2] [ref=e87]
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link "(6) Polo" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e92]: (6)
              - text: Polo
          - listitem [ref=e93]:
            - link "(5) H&M" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e95]: (5)
              - text: H&M
          - listitem [ref=e96]:
            - link "(5) Madame" [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e98]: (5)
              - text: Madame
          - listitem [ref=e99]:
            - link "(3) Mast & Harbour" [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e101]: (3)
              - text: Mast & Harbour
          - listitem [ref=e102]:
            - link "(4) Babyhug" [ref=e103] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e104]: (4)
              - text: Babyhug
          - listitem [ref=e105]:
            - link "(3) Allen Solly Junior" [ref=e106] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e107]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e108]:
            - link "(3) Kookie Kids" [ref=e109] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e110]: (3)
              - text: Kookie Kids
          - listitem [ref=e111]:
            - link "(5) Biba" [ref=e112] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e113]: (5)
              - text: Biba
    - generic [ref=e114]:
      - generic [ref=e115]:
        - heading "Features Items" [level=2] [ref=e116]
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img "ecommerce website products" [ref=e121]
              - heading "Rs. 500" [level=2] [ref=e122]
              - paragraph [ref=e123]: Blue Top
              - generic [ref=e124] [cursor=pointer]:
                - generic [ref=e125]: 
                - text: Add to cart
            - generic [ref=e126]:
              - heading "Rs. 500" [level=2] [ref=e127]
              - paragraph [ref=e128]: Blue Top
              - generic [ref=e129] [cursor=pointer]:
                - generic [ref=e130]: 
                - text: Add to cart
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link " View Product" [ref=e134] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e135]: 
                - text: View Product
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img "ecommerce website products" [ref=e140]
              - heading "Rs. 400" [level=2] [ref=e141]
              - paragraph [ref=e142]: Men Tshirt
              - generic [ref=e143] [cursor=pointer]:
                - generic [ref=e144]: 
                - text: Add to cart
            - generic [ref=e145]:
              - heading "Rs. 400" [level=2] [ref=e146]
              - paragraph [ref=e147]: Men Tshirt
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: 
                - text: Add to cart
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link " View Product" [ref=e153] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e154]: 
                - text: View Product
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img "ecommerce website products" [ref=e159]
              - heading "Rs. 1000" [level=2] [ref=e160]
              - paragraph [ref=e161]: Sleeveless Dress
              - generic [ref=e162] [cursor=pointer]:
                - generic [ref=e163]: 
                - text: Add to cart
            - generic [ref=e164]:
              - heading "Rs. 1000" [level=2] [ref=e165]
              - paragraph [ref=e166]: Sleeveless Dress
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: 
                - text: Add to cart
          - list [ref=e170]:
            - listitem [ref=e171]:
              - link " View Product" [ref=e172] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e173]: 
                - text: View Product
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - img "ecommerce website products" [ref=e178]
              - heading "Rs. 1500" [level=2] [ref=e179]
              - paragraph [ref=e180]: Stylish Dress
              - generic [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: 
                - text: Add to cart
            - generic [ref=e183]:
              - heading "Rs. 1500" [level=2] [ref=e184]
              - paragraph [ref=e185]: Stylish Dress
              - generic [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: 
                - text: Add to cart
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link " View Product" [ref=e191] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e192]: 
                - text: View Product
        - generic [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - img "ecommerce website products" [ref=e197]
              - heading "Rs. 600" [level=2] [ref=e198]
              - paragraph [ref=e199]: Winter Top
              - generic [ref=e200] [cursor=pointer]:
                - generic [ref=e201]: 
                - text: Add to cart
            - generic [ref=e202]:
              - heading "Rs. 600" [level=2] [ref=e203]
              - paragraph [ref=e204]: Winter Top
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: 
                - text: Add to cart
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link " View Product" [ref=e210] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e211]: 
                - text: View Product
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]:
              - img "ecommerce website products" [ref=e216]
              - heading "Rs. 400" [level=2] [ref=e217]
              - paragraph [ref=e218]: Summer White Top
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading "Rs. 400" [level=2] [ref=e222]
              - paragraph [ref=e223]: Summer White Top
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link " View Product" [ref=e229] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img "ecommerce website products" [ref=e235]
              - heading "Rs. 1000" [level=2] [ref=e236]
              - paragraph [ref=e237]: Madame Top For Women
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading "Rs. 1000" [level=2] [ref=e241]
              - paragraph [ref=e242]: Madame Top For Women
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link " View Product" [ref=e248] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img "ecommerce website products" [ref=e254]
              - heading "Rs. 700" [level=2] [ref=e255]
              - paragraph [ref=e256]: Fancy Green Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading "Rs. 700" [level=2] [ref=e260]
              - paragraph [ref=e261]: Fancy Green Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link " View Product" [ref=e267] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img "ecommerce website products" [ref=e273]
              - heading "Rs. 499" [level=2] [ref=e274]
              - paragraph [ref=e275]: Sleeves Printed Top - White
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading "Rs. 499" [level=2] [ref=e279]
              - paragraph [ref=e280]: Sleeves Printed Top - White
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link " View Product" [ref=e286] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img "ecommerce website products" [ref=e292]
              - heading "Rs. 359" [level=2] [ref=e293]
              - paragraph [ref=e294]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading "Rs. 359" [level=2] [ref=e298]
              - paragraph [ref=e299]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link " View Product" [ref=e305] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "ecommerce website products" [ref=e311]
              - heading "Rs. 278" [level=2] [ref=e312]
              - paragraph [ref=e313]: Frozen Tops For Kids
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading "Rs. 278" [level=2] [ref=e317]
              - paragraph [ref=e318]: Frozen Tops For Kids
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " View Product" [ref=e324] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img "ecommerce website products"
              - heading "Rs. 679" [level=2] [ref=e330]
              - paragraph [ref=e331]: Full Sleeves Top Cherry - Pink
              - generic [ref=e332] [cursor=pointer]:
                - generic [ref=e333]: 
                - text: Add to cart
            - generic [ref=e334]:
              - heading "Rs. 679" [level=2] [ref=e335]
              - paragraph [ref=e336]: Full Sleeves Top Cherry - Pink
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
          - list [ref=e340]:
            - listitem [ref=e341]:
              - link " View Product" [ref=e342] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e343]: 
                - text: View Product
        - generic [ref=e345]:
          - generic [ref=e346]:
            - generic [ref=e347]:
              - img "ecommerce website products"
              - heading "Rs. 315" [level=2] [ref=e348]
              - paragraph [ref=e349]: Printed Off Shoulder Top - White
              - generic [ref=e350] [cursor=pointer]:
                - generic [ref=e351]: 
                - text: Add to cart
            - generic [ref=e352]:
              - heading "Rs. 315" [level=2] [ref=e353]
              - paragraph [ref=e354]: Printed Off Shoulder Top - White
              - generic [ref=e355] [cursor=pointer]:
                - generic [ref=e356]: 
                - text: Add to cart
          - list [ref=e358]:
            - listitem [ref=e359]:
              - link " View Product" [ref=e360] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e361]: 
                - text: View Product
        - generic [ref=e363]:
          - generic [ref=e364]:
            - generic [ref=e365]:
              - img "ecommerce website products"
              - heading "Rs. 478" [level=2] [ref=e366]
              - paragraph [ref=e367]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e368] [cursor=pointer]:
                - generic [ref=e369]: 
                - text: Add to cart
            - generic [ref=e370]:
              - heading "Rs. 478" [level=2] [ref=e371]
              - paragraph [ref=e372]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e373] [cursor=pointer]:
                - generic [ref=e374]: 
                - text: Add to cart
          - list [ref=e376]:
            - listitem [ref=e377]:
              - link " View Product" [ref=e378] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e379]: 
                - text: View Product
        - generic [ref=e381]:
          - generic [ref=e382]:
            - generic [ref=e383]:
              - img "ecommerce website products"
              - heading "Rs. 1200" [level=2] [ref=e384]
              - paragraph [ref=e385]: Little Girls Mr. Panda Shirt
              - generic [ref=e386] [cursor=pointer]:
                - generic [ref=e387]: 
                - text: Add to cart
            - generic [ref=e388]:
              - heading "Rs. 1200" [level=2] [ref=e389]
              - paragraph [ref=e390]: Little Girls Mr. Panda Shirt
              - generic [ref=e391] [cursor=pointer]:
                - generic [ref=e392]: 
                - text: Add to cart
          - list [ref=e394]:
            - listitem [ref=e395]:
              - link " View Product" [ref=e396] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e397]: 
                - text: View Product
        - generic [ref=e399]:
          - generic [ref=e400]:
            - generic [ref=e401]:
              - img "ecommerce website products"
              - heading "Rs. 1050" [level=2] [ref=e402]
              - paragraph [ref=e403]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e404] [cursor=pointer]:
                - generic [ref=e405]: 
                - text: Add to cart
            - generic [ref=e406]:
              - heading "Rs. 1050" [level=2] [ref=e407]
              - paragraph [ref=e408]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e409] [cursor=pointer]:
                - generic [ref=e410]: 
                - text: Add to cart
          - list [ref=e412]:
            - listitem [ref=e413]:
              - link " View Product" [ref=e414] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e415]: 
                - text: View Product
        - generic [ref=e417]:
          - generic [ref=e418]:
            - generic [ref=e419]:
              - img "ecommerce website products"
              - heading "Rs. 1190" [level=2] [ref=e420]
              - paragraph [ref=e421]: Cotton Mull Embroidered Dress
              - generic [ref=e422] [cursor=pointer]:
                - generic [ref=e423]: 
                - text: Add to cart
            - generic [ref=e424]:
              - heading "Rs. 1190" [level=2] [ref=e425]
              - paragraph [ref=e426]: Cotton Mull Embroidered Dress
              - generic [ref=e427] [cursor=pointer]:
                - generic [ref=e428]: 
                - text: Add to cart
          - list [ref=e430]:
            - listitem [ref=e431]:
              - link " View Product" [ref=e432] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e433]: 
                - text: View Product
        - generic [ref=e435]:
          - generic [ref=e436]:
            - generic [ref=e437]:
              - img "ecommerce website products"
              - heading "Rs. 1530" [level=2] [ref=e438]
              - paragraph [ref=e439]: Blue Cotton Indie Mickey Dress
              - generic [ref=e440] [cursor=pointer]:
                - generic [ref=e441]: 
                - text: Add to cart
            - generic [ref=e442]:
              - heading "Rs. 1530" [level=2] [ref=e443]
              - paragraph [ref=e444]: Blue Cotton Indie Mickey Dress
              - generic [ref=e445] [cursor=pointer]:
                - generic [ref=e446]: 
                - text: Add to cart
          - list [ref=e448]:
            - listitem [ref=e449]:
              - link " View Product" [ref=e450] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e451]: 
                - text: View Product
        - generic [ref=e453]:
          - generic [ref=e454]:
            - generic [ref=e455]:
              - img "ecommerce website products"
              - heading "Rs. 1600" [level=2] [ref=e456]
              - paragraph [ref=e457]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e458] [cursor=pointer]:
                - generic [ref=e459]: 
                - text: Add to cart
            - generic [ref=e460]:
              - heading "Rs. 1600" [level=2] [ref=e461]
              - paragraph [ref=e462]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e463] [cursor=pointer]:
                - generic [ref=e464]: 
                - text: Add to cart
          - list [ref=e466]:
            - listitem [ref=e467]:
              - link " View Product" [ref=e468] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e469]: 
                - text: View Product
        - generic [ref=e471]:
          - generic [ref=e472]:
            - generic [ref=e473]:
              - img "ecommerce website products"
              - heading "Rs. 1100" [level=2] [ref=e474]
              - paragraph [ref=e475]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e476] [cursor=pointer]:
                - generic [ref=e477]: 
                - text: Add to cart
            - generic [ref=e478]:
              - heading "Rs. 1100" [level=2] [ref=e479]
              - paragraph [ref=e480]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e481] [cursor=pointer]:
                - generic [ref=e482]: 
                - text: Add to cart
          - list [ref=e484]:
            - listitem [ref=e485]:
              - link " View Product" [ref=e486] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e487]: 
                - text: View Product
        - generic [ref=e489]:
          - generic [ref=e490]:
            - generic [ref=e491]:
              - img "ecommerce website products"
              - heading "Rs. 849" [level=2] [ref=e492]
              - paragraph [ref=e493]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e494] [cursor=pointer]:
                - generic [ref=e495]: 
                - text: Add to cart
            - generic [ref=e496]:
              - heading "Rs. 849" [level=2] [ref=e497]
              - paragraph [ref=e498]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e499] [cursor=pointer]:
                - generic [ref=e500]: 
                - text: Add to cart
          - list [ref=e502]:
            - listitem [ref=e503]:
              - link " View Product" [ref=e504] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e505]: 
                - text: View Product
        - generic [ref=e507]:
          - generic [ref=e508]:
            - generic [ref=e509]:
              - img "ecommerce website products"
              - heading "Rs. 1299" [level=2] [ref=e510]
              - paragraph [ref=e511]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e512] [cursor=pointer]:
                - generic [ref=e513]: 
                - text: Add to cart
            - generic [ref=e514]:
              - heading "Rs. 1299" [level=2] [ref=e515]
              - paragraph [ref=e516]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: 
                - text: Add to cart
          - list [ref=e520]:
            - listitem [ref=e521]:
              - link " View Product" [ref=e522] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e523]: 
                - text: View Product
        - generic [ref=e525]:
          - generic [ref=e526]:
            - generic [ref=e527]:
              - img "ecommerce website products"
              - heading "Rs. 1000" [level=2] [ref=e528]
              - paragraph [ref=e529]: Green Side Placket Detail T-Shirt
              - generic [ref=e530] [cursor=pointer]:
                - generic [ref=e531]: 
                - text: Add to cart
            - generic [ref=e532]:
              - heading "Rs. 1000" [level=2] [ref=e533]
              - paragraph [ref=e534]: Green Side Placket Detail T-Shirt
              - generic [ref=e535] [cursor=pointer]:
                - generic [ref=e536]: 
                - text: Add to cart
          - list [ref=e538]:
            - listitem [ref=e539]:
              - link " View Product" [ref=e540] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e541]: 
                - text: View Product
        - generic [ref=e543]:
          - generic [ref=e544]:
            - generic [ref=e545]:
              - img "ecommerce website products"
              - heading "Rs. 1500" [level=2] [ref=e546]
              - paragraph [ref=e547]: Premium Polo T-Shirts
              - generic [ref=e548] [cursor=pointer]:
                - generic [ref=e549]: 
                - text: Add to cart
            - generic [ref=e550]:
              - heading "Rs. 1500" [level=2] [ref=e551]
              - paragraph [ref=e552]: Premium Polo T-Shirts
              - generic [ref=e553] [cursor=pointer]:
                - generic [ref=e554]: 
                - text: Add to cart
          - list [ref=e556]:
            - listitem [ref=e557]:
              - link " View Product" [ref=e558] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e559]: 
                - text: View Product
        - generic [ref=e561]:
          - generic [ref=e562]:
            - generic [ref=e563]:
              - img "ecommerce website products"
              - heading "Rs. 850" [level=2] [ref=e564]
              - paragraph [ref=e565]: Pure Cotton Neon Green Tshirt
              - generic [ref=e566] [cursor=pointer]:
                - generic [ref=e567]: 
                - text: Add to cart
            - generic [ref=e568]:
              - heading "Rs. 850" [level=2] [ref=e569]
              - paragraph [ref=e570]: Pure Cotton Neon Green Tshirt
              - generic [ref=e571] [cursor=pointer]:
                - generic [ref=e572]: 
                - text: Add to cart
          - list [ref=e574]:
            - listitem [ref=e575]:
              - link " View Product" [ref=e576] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e577]: 
                - text: View Product
        - generic [ref=e579]:
          - generic [ref=e580]:
            - generic [ref=e581]:
              - img "ecommerce website products"
              - heading "Rs. 799" [level=2] [ref=e582]
              - paragraph [ref=e583]: Soft Stretch Jeans
              - generic [ref=e584] [cursor=pointer]:
                - generic [ref=e585]: 
                - text: Add to cart
            - generic [ref=e586]:
              - heading "Rs. 799" [level=2] [ref=e587]
              - paragraph [ref=e588]: Soft Stretch Jeans
              - generic [ref=e589] [cursor=pointer]:
                - generic [ref=e590]: 
                - text: Add to cart
          - list [ref=e592]:
            - listitem [ref=e593]:
              - link " View Product" [ref=e594] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e595]: 
                - text: View Product
        - generic [ref=e597]:
          - generic [ref=e598]:
            - generic [ref=e599]:
              - img "ecommerce website products"
              - heading "Rs. 1200" [level=2] [ref=e600]
              - paragraph [ref=e601]: Regular Fit Straight Jeans
              - generic [ref=e602] [cursor=pointer]:
                - generic [ref=e603]: 
                - text: Add to cart
            - generic [ref=e604]:
              - heading "Rs. 1200" [level=2] [ref=e605]
              - paragraph [ref=e606]: Regular Fit Straight Jeans
              - generic [ref=e607] [cursor=pointer]:
                - generic [ref=e608]: 
                - text: Add to cart
          - list [ref=e610]:
            - listitem [ref=e611]:
              - link " View Product" [ref=e612] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e613]: 
                - text: View Product
        - generic [ref=e615]:
          - generic [ref=e616]:
            - generic [ref=e617]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e618]
              - paragraph [ref=e619]: Grunt Blue Slim Fit Jeans
              - generic [ref=e620] [cursor=pointer]:
                - generic [ref=e621]: 
                - text: Add to cart
            - generic [ref=e622]:
              - heading "Rs. 1400" [level=2] [ref=e623]
              - paragraph [ref=e624]: Grunt Blue Slim Fit Jeans
              - generic [ref=e625] [cursor=pointer]:
                - generic [ref=e626]: 
                - text: Add to cart
          - list [ref=e628]:
            - listitem [ref=e629]:
              - link " View Product" [ref=e630] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e631]: 
                - text: View Product
        - generic [ref=e633]:
          - generic [ref=e634]:
            - generic [ref=e635]:
              - img "ecommerce website products"
              - heading "Rs. 2300" [level=2] [ref=e636]
              - paragraph [ref=e637]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e638] [cursor=pointer]:
                - generic [ref=e639]: 
                - text: Add to cart
            - generic [ref=e640]:
              - heading "Rs. 2300" [level=2] [ref=e641]
              - paragraph [ref=e642]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e643] [cursor=pointer]:
                - generic [ref=e644]: 
                - text: Add to cart
          - list [ref=e646]:
            - listitem [ref=e647]:
              - link " View Product" [ref=e648] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e649]: 
                - text: View Product
        - generic [ref=e651]:
          - generic [ref=e652]:
            - generic [ref=e653]:
              - img "ecommerce website products"
              - heading "Rs. 3000" [level=2] [ref=e654]
              - paragraph [ref=e655]: Cotton Silk Hand Block Print Saree
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e657]: 
                - text: Add to cart
            - generic [ref=e658]:
              - heading "Rs. 3000" [level=2] [ref=e659]
              - paragraph [ref=e660]: Cotton Silk Hand Block Print Saree
              - generic [ref=e661] [cursor=pointer]:
                - generic [ref=e662]: 
                - text: Add to cart
          - list [ref=e664]:
            - listitem [ref=e665]:
              - link " View Product" [ref=e666] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e667]: 
                - text: View Product
        - generic [ref=e669]:
          - generic [ref=e670]:
            - generic [ref=e671]:
              - img "ecommerce website products"
              - heading "Rs. 3500" [level=2] [ref=e672]
              - paragraph [ref=e673]: Rust Red Linen Saree
              - generic [ref=e674] [cursor=pointer]:
                - generic [ref=e675]: 
                - text: Add to cart
            - generic [ref=e676]:
              - heading "Rs. 3500" [level=2] [ref=e677]
              - paragraph [ref=e678]: Rust Red Linen Saree
              - generic [ref=e679] [cursor=pointer]:
                - generic [ref=e680]: 
                - text: Add to cart
          - list [ref=e682]:
            - listitem [ref=e683]:
              - link " View Product" [ref=e684] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e685]: 
                - text: View Product
        - generic [ref=e687]:
          - generic [ref=e688]:
            - generic [ref=e689]:
              - img "ecommerce website products"
              - heading "Rs. 5000" [level=2] [ref=e690]
              - paragraph [ref=e691]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e692] [cursor=pointer]:
                - generic [ref=e693]: 
                - text: Add to cart
            - generic [ref=e694]:
              - heading "Rs. 5000" [level=2] [ref=e695]
              - paragraph [ref=e696]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e697] [cursor=pointer]:
                - generic [ref=e698]: 
                - text: Add to cart
          - list [ref=e700]:
            - listitem [ref=e701]:
              - link " View Product" [ref=e702] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e703]: 
                - text: View Product
        - generic [ref=e705]:
          - generic [ref=e706]:
            - generic [ref=e707]:
              - img "ecommerce website products"
              - heading "Rs. 1400" [level=2] [ref=e708]
              - paragraph [ref=e709]: Lace Top For Women
              - generic [ref=e710] [cursor=pointer]:
                - generic [ref=e711]: 
                - text: Add to cart
            - generic [ref=e712]:
              - heading "Rs. 1400" [level=2] [ref=e713]
              - paragraph [ref=e714]: Lace Top For Women
              - generic [ref=e715] [cursor=pointer]:
                - generic [ref=e716]: 
                - text: Add to cart
          - list [ref=e718]:
            - listitem [ref=e719]:
              - link " View Product" [ref=e720] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e721]: 
                - text: View Product
        - generic [ref=e723]:
          - generic [ref=e724]:
            - generic [ref=e725]:
              - img "ecommerce website products"
              - heading "Rs. 1389" [level=2] [ref=e726]
              - paragraph [ref=e727]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e728] [cursor=pointer]:
                - generic [ref=e729]: 
                - text: Add to cart
            - generic [ref=e730]:
              - heading "Rs. 1389" [level=2] [ref=e731]
              - paragraph [ref=e732]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e733] [cursor=pointer]:
                - generic [ref=e734]: 
                - text: Add to cart
          - list [ref=e736]:
            - listitem [ref=e737]:
              - link " View Product" [ref=e738] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e739]: 
                - text: View Product
      - generic [ref=e740]:
        - heading "recommended items" [level=2] [ref=e741]
        - generic [ref=e742]:
          - generic [ref=e743]:
            - text:   
            - generic:
              - generic [ref=e747]:
                - img "ecommerce website products" [ref=e748]
                - heading "Rs. 1500" [level=2] [ref=e749]
                - paragraph [ref=e750]: Stylish Dress
                - generic [ref=e751] [cursor=pointer]:
                  - generic [ref=e752]: 
                  - text: Add to cart
              - generic [ref=e756]:
                - img "ecommerce website products" [ref=e757]
                - heading "Rs. 600" [level=2] [ref=e758]
                - paragraph [ref=e759]: Winter Top
                - generic [ref=e760] [cursor=pointer]:
                  - generic [ref=e761]: 
                  - text: Add to cart
              - generic [ref=e765]:
                - img "ecommerce website products" [ref=e766]
                - heading "Rs. 400" [level=2] [ref=e767]
                - paragraph [ref=e768]: Summer White Top
                - generic [ref=e769] [cursor=pointer]:
                  - generic [ref=e770]: 
                  - text: Add to cart
          - link "" [ref=e771] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e772]: 
          - link "" [ref=e773] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e774]: 
  - insertion [ref=e776]
  - contentinfo [ref=e778]:
    - generic [ref=e783]:
      - heading "Subscription" [level=2] [ref=e784]
      - generic [ref=e785]:
        - textbox "Your email address" [ref=e786]
        - button "" [ref=e787] [cursor=pointer]:
          - generic [ref=e788]: 
        - paragraph [ref=e789]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e793]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../Pages/HomePage';
  3   | import { TestConfig } from '../test.config';
  4   | import { ContactUsPage } from '../Pages/ContactUsPage';
  5   | import { TestCasePage } from '../Pages/TestCasePage';
  6   | import { CartPage } from '../Pages/CartPage';
  7   | import { ProductPage } from '../Pages/ProductPage';
  8   | import { CheckoutPage } from '../Pages/CheckoutPage';
  9   | import { RegisterPage } from '../Pages/RegisterPage';
  10  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  11  | 
  12  | 
  13  | let homePage: HomePage;
  14  | let testConfig: TestConfig;
  15  | let checkoutPage: CheckoutPage;
  16  | let contactUsPage: ContactUsPage;
  17  | let testCasePage: TestCasePage;
  18  | let cartPage: CartPage;
  19  | let productPage: ProductPage;
  20  | let registerPage: RegisterPage;
  21  | 
  22  |     let name = RandomDataUtil.getFirstName();
  23  |     let email = RandomDataUtil.getEmail();
  24  |     let password = RandomDataUtil.getPassword();
  25  | 
  26  | test.beforeEach(async ({ page }) => {
  27  |     homePage = new HomePage(page);
  28  |     testConfig = new TestConfig();
  29  |     checkoutPage = new CheckoutPage(page);
  30  |     contactUsPage = new ContactUsPage(page);
  31  |     testCasePage = new TestCasePage(page);
  32  |     cartPage = new CartPage(page);
  33  |     registerPage = new RegisterPage(page);
  34  |     productPage = new ProductPage(page);
> 35  |     await page.goto(testConfig.appUrl);
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  36  |     expect(page.url()).toBe(testConfig.appUrl);
  37  |     console.log("Navigated to home page successfully");
  38  | 
  39  | 
  40  | });
  41  | 
  42  | test('Register While Checkout', async ({ page }) => {
  43  | 
  44  |     await homePage.productsBtn.click();
  45  |     expect(await productPage.isProductPageExists()).toBeTruthy();
  46  |     await productPage.addProductToCart();
  47  |     console.log("Product added to cart successfully");
  48  | 
  49  |     await homePage.cartBtn.click();
  50  |     expect(page.url()).toContain("/view_cart");
  51  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  52  |     console.log("Navigated to cart page successfully");
  53  | 
  54  |     await cartPage.proceedToCheckoutBtn.click();
  55  |     expect(page.textContent("p:has-text('Register / Login account to proceed on checkout.')")).toBeTruthy();
  56  |     console.log("Warning to register first is shown");
  57  | 
  58  |     await cartPage.continueoncartBtn.click();
  59  |     await homePage.loginOrSignupButton.click();
  60  |     await registerPage.RegisterUser(name, email);
  61  |     expect(page.textContent("h2:has-text('Enter Account Information')")).toBeTruthy();
  62  |     console.log("Enter Account Information is visible");
  63  |     await registerPage.FillAccountInformation(password, RandomDataUtil.getRandomDay(), RandomDataUtil.getRandomMonth(), RandomDataUtil.getRandomYear(), true, true);
  64  |     await registerPage.FillAddressInformation(RandomDataUtil.getFirstName(), RandomDataUtil.getlastName(), RandomDataUtil.getCompanyName(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomAddress(), RandomDataUtil.getRandomCountry(), RandomDataUtil.getRandomState(), RandomDataUtil.getRandomCity(), RandomDataUtil.getZipCode(), RandomDataUtil.getPhoneNumber());
  65  |     await registerPage.SubmitRegistration();
  66  |     expect(page.textContent("h2:has-text('Account Created!')")).toBeTruthy();
  67  |     console.log("Account Created! is visible");
  68  |     console.log("Registered user: " + name + " with email: " + email + " and password: " + password);
  69  |     await registerPage.ContinueAfterRegistration();
  70  |     expect(page.textContent("a:has-text('Logged in as " + name + "')")).toBeTruthy();
  71  |     console.log("Logged in as " + name + " is visible");
  72  | 
  73  |     await homePage.cartBtn.click();
  74  |     expect(page.url()).toContain("/view_cart");
  75  |     expect(await cartPage.isCartPageExists()).toBeTruthy();
  76  |     console.log("Navigated to cart page successfully");
  77  | 
  78  |     await cartPage.proceedToCheckoutBtn.click();
  79  |     expect(await checkoutPage.isCheckoutPageExists()).toBeTruthy();
  80  |     expect(page.textContent("h2:has-text('Address Details')")).toBeTruthy();
  81  |     console.log("Navigated to checkout page successfully");
  82  | 
  83  |         let cartItems = await cartPage.getCartItems();
  84  |     if(cartItems.length > 0){
  85  |         console.log("Cart has items and they are displayed below");
  86  |         for(let i=0;i<cartItems.length;i++){
  87  |             console.log(await cartItems[i].textContent());
  88  |         }
  89  |     }else{
  90  |         console.log("Cart is empty");
  91  |     }
  92  | 
  93  | 
  94  |         let addressInfo = await checkoutPage.getAddressInfo();
  95  |     if(addressInfo.length > 0){
  96  |         console.log("Delivery address information is displayed below");
  97  |         for(let i=0;i<addressInfo.length;i++){
  98  |             console.log(await addressInfo[i].textContent());
  99  |         }
  100 |     }else{
  101 |         console.log("Addreess is empty");
  102 |     }
  103 | 
  104 | 
  105 | 
  106 | 
  107 |         let billingInfo = await checkoutPage.getBillingInfo();
  108 |     if(billingInfo.length > 0){
  109 |         console.log("Billing address information is displayed below");
  110 |         for(let i=0;i<billingInfo.length;i++){
  111 |             console.log(await billingInfo[i].textContent());
  112 |         }
  113 |     }else{
  114 |         console.log("Billing address is empty");
  115 |     }
  116 | 
  117 |     page.waitForTimeout(5000);
  118 | });
```