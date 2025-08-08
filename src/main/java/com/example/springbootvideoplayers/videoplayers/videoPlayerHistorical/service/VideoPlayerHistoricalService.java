package com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.service;

import java.util.UUID;

import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.entity.VideoPlayerHistoricalEntity;
import com.example.springbootvideoplayers.videoplayers.exception.NotFoundException;
import com.example.springbootvideoplayers.videoplayers.videoPlayer.repository.VideoPlayerRepository;
import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.entity.VideoPlayerHistoricalEntity;
import com.example.springbootvideoplayers.videoplayers.videoPlayerHistorical.repository.VideoPlayerHistoricalRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class VideoPlayerHistoricalService {

    private final VideoPlayerHistoricalRepository repo;

    public Iterable<VideoPlayerHistoricalEntity> findAllVideoPlayersHistorical() {
        return repo.findAll();
    }

    public VideoPlayerHistoricalEntity findVideoPlayerHistoricalById(UUID id) {
        return findOrThrow(id);
    }

    public void removeVideoPlayerHistoricalById(UUID id) {
        repo.deleteById(id);
    }

    public VideoPlayerHistoricalEntity addVideoPlayerHistorical(VideoPlayerHistoricalEntity videoPlayerHistorical) {
        return repo.save(videoPlayerHistorical);
    }

    public void updateVideoPlayerHistorical(UUID id, VideoPlayerHistoricalEntity videoPlayerHistorical) {
        findOrThrow(id);
        repo.save(videoPlayerHistorical);
    }

    private VideoPlayerHistoricalEntity findOrThrow(final UUID id) {
        return repo
                .findById(id)
                .orElseThrow(
                        () -> new NotFoundException("Video-player by id " + id + " was not found")
                );
    }
}

