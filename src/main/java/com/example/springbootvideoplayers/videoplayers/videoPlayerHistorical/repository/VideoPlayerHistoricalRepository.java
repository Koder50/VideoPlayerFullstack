package com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.repository;

import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.entity.VideoPlayerHistoricalEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface VideoPlayerHistoricalRepository extends CrudRepository<VideoPlayerHistoricalEntity, UUID> {
}
