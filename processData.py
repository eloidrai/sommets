import csv, json

def convertToGPS(string):
	positif = string[0] != '-'
	nbs = string[not positif:]
	d, m, s = [int(v) for v in nbs.split(':')]
	return round((d + m/60 + s/3600) * (1 if positif else -1), 5)

with open("sommets.csv", 'r') as rf, open("sommets.js", 'w') as wf:
	liste = [*csv.reader(rf)]
	for ligne in liste:
		ligne[4] = convertToGPS(ligne[4])
		ligne[5] = convertToGPS(ligne[5])
		ligne.pop(8) # Cette colonne sert vraiment à rien
		ligne.pop(6) # Cette colonne sert vraiment à rien
		ligne.pop(2) # Cette colonne sert vraiment à rien
		ligne.pop(2) # Cette colonne sert vraiment à rien
		print(*ligne)
	wf.write("const sommets = " + json.dumps(liste))
