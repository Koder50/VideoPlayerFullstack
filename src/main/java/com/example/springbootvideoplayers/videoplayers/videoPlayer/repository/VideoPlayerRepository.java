package com.example.springbootvideoplayers.videoplayers.videoPlayer.repository;

import com.example.springbootvideoplayers.videoplayers.videoPlayer.entity.VideoPlayerEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface VideoPlayerRepository extends CrudRepository<VideoPlayerEntity, UUID> {
}

