from scapy.all import sniff


def handle_packet(packet):
    print(packet.summary())


if __name__ == "__main__":
    print("Sensor escuchando...")
    sniff(iface="br-518ab64e28f5", prn=handle_packet, store=False)
