import requests

response = requests.get(url="https://icmods.mineprogramming.org/theme.php?theme=dark", headers={"Referrer": "https://icmods.mineprogramming.org/account", "Host": "icmods.mineprogramming.org"}, cookies={"login": "ENGINEX"})
print(response.status_code)
print(response.content)