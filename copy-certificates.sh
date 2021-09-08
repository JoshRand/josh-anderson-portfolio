#!/bin/sh 
TARGET_DIR="/etc/letsencrypt/live/active" 
 cp "$RENEWED_LINEAGE/cert.pem" "$TARGET_DIR/cert.pem" 
 cp "$RENEWED_LINEAGE/privkey.pem" "$TARGET_DIR/privkey.pem" 
 cp "$RENEWED_LINEAGE/chain.pem" "$TARGET_DIR/chain.pem" 
 cp "$RENEWED_LINEAGE/fullchain.pem" "$TARGET_DIR/fullchain.pem" 