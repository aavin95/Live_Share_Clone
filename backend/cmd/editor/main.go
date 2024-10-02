package main

import (
	"log"
	"net"

	pb "github.com/aavin95/Live_Share_Clone/pkg/proto"
	"google.golang.org/grpc"
)

type server struct {
    pb.UnimplementedEditorServiceServer
}

// Implement your gRPC methods here

func main() {
    lis, err := net.Listen("tcp", ":50051")
    if err != nil {
        log.Fatalf("Failed to listen: %v", err)
    }
    s := grpc.NewServer()
    pb.RegisterEditorServiceServer(s, &server{})
    log.Printf("Server listening at %v", lis.Addr())
    if err := s.Serve(lis); err != nil {
        log.Fatalf("Failed to serve: %v", err)
    }
}
